import InboxIcon from "@material-ui/icons/Inbox";
import MessageIcon from "@material-ui/icons/Message";
import DraftsIcon from "@material-ui/icons/Drafts";
import PeopleIcon from "@material-ui/icons/People";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";

export const sidebarItems = [
  {
    icon: <MessageIcon />,
    text: "Thread",
  },
  {
    icon: <InboxIcon />,
    text: "All DMs",
  },
  {
    icon: <DraftsIcon />,
    text: "Mentions & Reactions",
  },
  {
    icon: <BookmarkBorderOutlinedIcon />,
    text: "Save Items",
  },
  {
    icon: <PeopleIcon />,
    text: "Peoples & Groups",
  },
  {
    icon: <AppsOutlinedIcon />,
    text: "More",
  },
];
