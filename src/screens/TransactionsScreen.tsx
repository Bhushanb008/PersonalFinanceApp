import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Transaction } from '../types/types';
import { transactionsData } from '../utils/mockData';
import CustomHeader from '../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import FilterBottomSheet from '../components/FilterBottomSheet';
import { IMAGES } from '../components/Images';
import NoDataFound from '../components/NoDataFound';

type Props = NativeStackScreenProps<RootStackParamList, 'Transactions'>;

const WIDTH = Dimensions.get('window').width;

const TransactionsScreen: React.FC<Props> = ({ navigation }) => {
  const [data] = useState<Transaction[]>(transactionsData);
  // const navigation = useNavigation();
  const [filteredData, setFilteredData] = useState<Transaction[]>(data);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedRange, setSelectedRange] = useState('all');

  const parseDate = (dateStr: string) => {
    return new Date(dateStr);
  };

  const applyFilter = (type: string, range: string) => {
    let filtered = [...data];
    // console.log(type, range, 'lll');
    if (type !== 'all') {
      filtered = filtered?.filter(item => item?.type === type);
    }

    const today = new Date();

    if (range !== 'all') {
      filtered = filtered?.filter(item => {
        const itemDate = parseDate(item?.date);

        if (range === 'week') {
          const weekAgo = new Date();
          weekAgo?.setDate(today?.getDate() - 7);

          return itemDate >= weekAgo && itemDate <= today;
        }

        if (range === 'month') {
          return (
            itemDate?.getMonth() === today?.getMonth() &&
            itemDate.getFullYear() === today.getFullYear()
          );
        }

        return true;
      });
    }

    setFilteredData(filtered);
    setSelectedType(type);
    setSelectedRange(range);
    setShowFilter(false);
  };

  const resetFilter = () => {
    setFilteredData(data);
    setSelectedType('all');
    setSelectedRange('all');
    setShowFilter(false);
  };

  const renderItem = ({ item }: { item: Transaction }) => (
    <TouchableOpacity
      style={styles.itemStyle}
      onPress={() => navigation.navigate('TransactionDetail', { item })}
    >
      <View>
        <Text style={styles.titleText}>{item?.title}</Text>
        <Text style={styles.dateText}>{item?.date}</Text>
      </View>

      <Text
        style={[
          styles.amountText,
          item?.type === 'income' ? styles.incomeStyle : styles.expenseStyle,
        ]}
      >
        {item?.type === 'income' ? '+' : '-'} ₹{item?.amount}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainViewStyle}>
      <CustomHeader
        Heading="Transactions List"
        backIcon
        onBackPress={() => {
          navigation?.goBack();
        }}
      />

      <TouchableOpacity
        style={styles.filterhandleStyle}
        onPress={() => setShowFilter(true)}
      >
        <Image source={IMAGES?.FilterIcon} style={styles.filterImageStyle} />
      </TouchableOpacity>
      <FlatList
        data={filteredData}
        keyExtractor={item => item?.id}
        renderItem={renderItem}
        ListEmptyComponent={<NoDataFound message="No transactions found" />}
        contentContainerStyle={{ paddingBottom: 20, flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      />

      <FilterBottomSheet
        visible={showFilter}
        selectedType={selectedType}
        selectedRange={selectedRange}
        onTypeChange={setSelectedType}
        onRangeChange={setSelectedRange}
        onApply={applyFilter}
        onReset={resetFilter}
        onClose={() => setShowFilter(false)}
      />
    </View>
  );
};

export default TransactionsScreen;

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemStyle: {
    padding: 18,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 15,
    fontWeight: '500',
  },
  filterhandleStyle: {
    backgroundColor: '#e2d9d2',
    margin: 12,
    padding: 8,
    borderRadius: 8,
    width: WIDTH * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  dateText: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
  amountText: {
    fontWeight: '700',
    fontSize: 14,
  },
  incomeStyle: {
    color: '#2ecc71',
  },
  expenseStyle: {
    color: '#e74c3c',
  },

  filterImageStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
