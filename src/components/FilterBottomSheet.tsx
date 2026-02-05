import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import { IMAGES } from './Images';

interface Props {
  visible: boolean;

  selectedType: string;
  selectedRange: string;
  onTypeChange: (v: string) => void;
  onRangeChange: (v: string) => void;

  onApply: (type: string, range: string) => void;

  onReset: () => void;
  onClose: () => void;
}

const FilterBottomSheet: React.FC<Props> = ({
  visible,
  selectedType,
  selectedRange,
  onTypeChange,
  onRangeChange,
  onApply,
  onReset,
  onClose,
}) => {
  const Option = ({
    label,
    selected,
    onPress,
  }: {
    label: string;
    selected: boolean;
    onPress: () => void;
  }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.optionButtons, selected && styles.optionSelected]}
      onPress={onPress}
    >
      <Text style={[styles.optionText, selected && styles.selectedText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.MainViewStyle}>
        <View style={styles.modalView}>
          <View style={styles?.modalViewTwo}>
            <Text style={styles.modalTitleStyle}>Filters</Text>
            <TouchableOpacity style={{ padding: 3 }} onPress={onClose}>
              <Image
                source={IMAGES?.CrossIcon}
                style={styles?.crossImageStyle}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.TypeLabelText}>Type</Text>
          <View style={styles.HorizontalView}>
            <Option
              label="All"
              selected={selectedType === 'all'}
              onPress={() => onTypeChange('all')}
            />
            <Option
              label="Income"
              selected={selectedType === 'income'}
              onPress={() => onTypeChange('income')}
            />
            <Option
              label="Expense"
              selected={selectedType === 'expense'}
              onPress={() => onTypeChange('expense')}
            />
          </View>

          <Text style={styles.TypeLabelText}>Date Range</Text>
          <View style={styles.HorizontalView}>
            <Option
              label="All"
              selected={selectedRange === 'all'}
              onPress={() => onRangeChange('all')}
            />
            <Option
              label="This Week"
              selected={selectedRange === 'week'}
              onPress={() => onRangeChange('week')}
            />
            <Option
              label="This Month"
              selected={selectedRange === 'month'}
              onPress={() => onRangeChange('month')}
            />
          </View>

          <View style={styles.ResetAndApplyButtonsView}>
            <TouchableOpacity style={styles.resetButtonStyle} onPress={onReset}>
              <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.applyButtonStyle}
              onPress={() => onApply(selectedType, selectedRange)}
            >
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterBottomSheet;

const styles = StyleSheet.create({
  MainViewStyle: {
    flex: 1,
    backgroundColor: '#00000066',
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  modalViewTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
  },
  modalTitleStyle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: '4%',
  },
  crossImageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  TypeLabelText: {
    marginTop: '3%',
    fontSize: 14,
    fontWeight: '600',
  },
  HorizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '3%',
  },
  optionButtons: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: '3%',
    marginBottom: '3%',
  },
  optionSelected: {
    backgroundColor: '#e78331',
    borderColor: '#e78331',
  },
  optionText: {
    fontSize: 13,
    color: '#333',
  },
  selectedText: {
    color: '#fff',
    fontWeight: '600',
  },
  ResetAndApplyButtonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '8%',
    marginBottom: '3%',
  },
  resetButtonStyle: {
    paddingVertical: '2.5%',
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },
  applyButtonStyle: {
    backgroundColor: '#e78331',
    paddingVertical: '2.5%',
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e78331',
    borderRadius: 10,
  },
  resetText: {
    color: '#777',
    fontSize: 14,
    fontWeight: '400',
  },
  applyText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
