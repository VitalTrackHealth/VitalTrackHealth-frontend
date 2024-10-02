import { Modal, View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { createStyles, colors } from "@/styles";

const CustomModal = ({
  visible,
  onClose,
  title,
  message,
  onConfirm,
  variant = "default",
}) => {
  const getIconProps = () => {
    switch (variant) {
      case "warning":
        return { name: "warning", color: colors.warning };
      case "error":
        return { name: "closecircle", color: colors.error };
      case "success":
        return { name: "checkcircle", color: colors.success };
      default:
        // This is a typo with AntDesign that we have to live with
        return { name: "infocirlce", color: colors.primary };
    }
  };

  const iconProps = getIconProps();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.iconContainer}>
            <AntDesign {...iconProps} size={50} />
          </View>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalText}>{message}</Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                styles.cancelButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                styles.confirmButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={onConfirm}
            >
              <Text style={styles.buttonText}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = createStyles({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  iconContainer: {
    marginBottom: 15,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    minWidth: 100,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  cancelButton: {
    backgroundColor: colors.lightNeutral.medium,
  },
  confirmButton: {
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CustomModal;
