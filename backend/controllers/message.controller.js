import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMesasge = new Message({
      senderId: senderId,
      receiverId: receiverId,
      message: message,
    });

    if (newMesasge) {
      conversation.messages.push(newMesasge._id);
    }

    //SOCKET IO FUNCTIONALITY WILL GO HERE

    await Promise.all([conversation.save(), newMesasge.save()]);

    res.status(201).json(newMesasge);
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: friendId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, friendId],
      },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessage controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
