import Notification from "../model/notify-schema.js";
export const getNotify = async (req, res) => {
    try {
        const { username } = req.params;
        const notification = await Notification.findOne({ username });
        if (!notification) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        res.json(notification);
    } catch (error) {
        console.error('Error fetching notification:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
export const deleteNotify = async (req, res) => {
    try{
        const { username } = req.params;
        // Check if notifications exist for the given username
        const userNotifications = await Notification.findOne({ username });
        if (!userNotifications) {
            // If no notifications found for the user, return success without deletion
            return res.status(200).json({ message: 'No notifications found for the user' });
        }
        // If notifications exist, delete them
        await Notification.deleteMany({ username });
        res.status(204).end(); // No content response for successful deletion
    } catch (error) {
        console.error('Error deleting notifications:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};