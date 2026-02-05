import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import CustomHeader from '../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../components/PrimaryButton';

type Props = NativeStackScreenProps<RootStackParamList, 'TransactionDetail'>;

const WIDTH = Dimensions.get('window')?.width;

const TransactionDetailScreen: React.FC<Props> = ({ route }) => {
  const { item } = route.params;
  // console.log(item,'item===')
  const navigation = useNavigation();

  const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <View style={styles.detailView}>
      <Text style={styles.labelText}>{label}</Text>
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );

  return (
    <>
      <View style={styles.MainViewStyle}>
        <CustomHeader
          Heading="Transaction Detail"
          backIcon
          onBackPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.containViewStyle}>
          <View style={{ padding: 15 }}>
            <Text style={[styles.amountText,{color:item?.type == 'income' ? '#2E7D32' : '#C62828'}]}>₹ {item?.amount}</Text>

            <DetailRow label="Category" value={item?.title} />
            <DetailRow label="Date" value={item?.date} />
            <DetailRow label="Notes" value={item?.note} />
          </View>

          <PrimaryButton title="Edit" loading={false} onPress={() => {}} />
        </View>
      </View>
    </>
  );
};

export default TransactionDetailScreen;

const styles = StyleSheet.create({
  MainViewStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containViewStyle: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: '5%',
  },
  amountText: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: '2%',
  },
  detailView: {
    marginBottom: '5%',
  },
  labelText: {
    color: '#777',
    fontSize: 13,
  },
  valueText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: '1%',
  },
  EditTextStyle: {
    color: '#fff',
    fontWeight: '600',
  },
});