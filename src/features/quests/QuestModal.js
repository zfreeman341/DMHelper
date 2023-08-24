import React, { useState } from 'react';
import { Modal, FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function QuestModal({ isVisible, onClose, quests, setCurrentQuest, handleObjectivePress }) {

  const [selectedQuest, setSelectedQuest] = useState(null);

  const handleQuestPressLocal = (quest) => {
    if (selectedQuest === quest.title) {
      setSelectedQuest(null);
    } else {
      setSelectedQuest(quest.title);
      if (setCurrentQuest) {
        setCurrentQuest(quest.title);
      }
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>Quests</Text>
          <FlatList
            data={quests}
            renderItem={({ item, index: questIndex }) => (
              <TouchableOpacity onPress={() => handleQuestPressLocal(item)}>
                <Text>{item.title}</Text>
                {selectedQuest === item.title && (
                  <FlatList
                    data={item.objectives}
                    renderItem={({ item: objective, index: objectiveIndex }) => (
                      <TouchableOpacity onPress={() => handleObjectivePress(questIndex, objectiveIndex)}>
                        <Text style={styles.objective}>{objective}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => `${index}`}
                  />
                )}
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.title}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '80%',
    height: '60%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
  objective: {
    marginLeft: 20,
    fontSize: 16,
  }
});
