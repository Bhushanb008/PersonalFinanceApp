import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Dimensions,
  Image,
  ListRenderItem,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import CustomHeader from '../components/CustomHeader';
import { IMAGES } from '../components/Images';
import NoDataFound from '../components/NoDataFound';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

type SummaryCard = {
  id: string;
  title: string;
  amount: number;
  image: any;
  note?: string;
};
const WIDTH = Dimensions.get('window')?.width;

const DashboardScreen: React.FC<Props> = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const summaryCards = [
    {
      id: '1',
      title: 'Food',
      amount: 2500,
      image: IMAGES?.FoodImage,
      note: 'Groceries, dining & snacks for the month',
    },
    {
      id: '2',
      title: 'Bills',
      amount: 1800,
      image: IMAGES?.BillsImage,
      note: 'Electricity, internet payments',
    },
    {
      id: '3',
      title: 'Travel',
      amount: 1200,
      image: IMAGES?.TravelImage,
      note: 'Cab or fuel expenses',
    },
    {
      id: '4',
      title: 'Mobile recharge',
      amount: 1770,
      image: IMAGES?.MobileImage,
      note: 'Mobile & TV recharges ',
    },
    {
      id: '5',
      title: 'Mobile recharge',
      amount: 17,
      image: IMAGES?.MobileImage,
      note: 'Mobile & TV recharges ',
    },
  ];

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const renderSummaryCard: ListRenderItem<SummaryCard> = ({ item }) => (
    <View style={[styles.spendingCard, {}]}>
      <Image source={item?.image} style={styles?.ItemImageStyle} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles?.cardAmount}>₹ {item.amount}</Text>
    </View>
  );

  const HeaderComponent = () => (
    <View>
      <TouchableOpacity
        style={styles.balanceCard}
        onPress={() => navigation.navigate('Transactions')}
      >
        <View style={{ padding: 14 }}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>₹ 25,000</Text>
        </View>

        <View style={[styles?.horizonatalView, {}]}>
          <View style={styles?.miniCard}>
            <View style={{}}>
              <Text style={styles.miniLabel}>Income</Text>
              <Text style={[styles.miniAmount, { color: '#2E7D32' }]}>
                ₹ 10,000
              </Text>
            </View>
          </View>

          <View style={styles.miniCard}>
            <View style={{}}>
              <Text style={styles.miniLabel}>Expense</Text>
              <Text style={[styles.miniAmount, { color: '#C62828' }]}>
                ₹ 6,000
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Spending Overview</Text>

      <FlatList
        data={summaryCards}
        renderItem={renderSummaryCard}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
        style={styles.FlatListStyle}
        ListEmptyComponent={<NoDataFound />} //message="No spending data found"
      />
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <CustomHeader Heading="Dashboard" />

      <FlatList
        data={[]}
        renderItem={null}
        ListHeaderComponent={HeaderComponent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        // ListEmptyComponent={}
        style={{}}
      />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  balanceCard: {
    width: WIDTH * 0.9,
    alignSelf: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: '4%',
    borderWidth: 1,
    borderColor: '#ffffff00',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  balanceLabel: {
    color: '#383535',
    fontSize: 14,
  },
  balanceAmount: {
    color: '#000',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: '1%',
  },
  horizonatalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e2d3ca',
    borderTopWidth: 1,
    borderTopColor: '#e2d3ca',
  },
  miniCard: {
    width: WIDTH * 0.44,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  miniLabel: {
    fontSize: 14,
    color: '#363535',
  },
  miniAmount: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: '3%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: '4%',
    paddingHorizontal: '4%',
  },
  spendingCard: {
    backgroundColor: '#D3D3D3',
    width: WIDTH * 0.4,
    borderRadius: 16,
    padding: 14,
    margin: 4,
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  ItemImageStyle: {
    width: WIDTH * 0.15,
    height: WIDTH * 0.15,
    resizeMode: 'contain',
  },
  cardTitle: {
    color: '#3c3939',
    fontSize: 14,
  },
  cardAmount: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
    marginTop: '2%',
  },
  FlatListStyle: {
    alignSelf: 'center',
    marginLeft: '3%',
    marginRight: '3%',
  },
});
