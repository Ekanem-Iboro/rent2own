import { BreadcrumbComp } from "@/components/reuseable/BreadCrumbs";
import { ArrowLeft, MailCheckIcon, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import noti from "@/assets/icons/notificationtabicon.svg";
interface Notification {
  id: number;
  title: string;
  sub_title: string;
  date: string;
  message: string;
  isNew: boolean;
}

const NotificationPanel: React.FC = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>(notificationsData);
  const [selectedNotification, setSelectedNotification] =
    useState<Notification | null>(null);
  const [MobileNotification, setMobileNotification] = useState<boolean>(false);

  // Function to truncate message to 20 words
  const truncateMessage = (message: string, wordLimit: number) => {
    const words = message.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : message;
  };

  // Delete notification
  const handleDelete = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
    setSelectedNotification(null);
    setMobileNotification(false);
  };

  // Mark as unread
  const handleMarkAsUnread = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, isNew: true } : notification
      )
    );
    setMobileNotification(false);
  };
  const newMessages = notifications.filter((item) => item.isNew === true);
  useEffect(() => {
    notifications.sort((a, b) => {
      if (a.isNew && !b.isNew) return -1; // a should come before b
      if (!a.isNew && b.isNew) return 1; // b should come before a
      return new Date(b.date).getTime() - new Date(a.date).getTime(); // sort by date if both are new or both are old
    });
  }, [notifications]); // Add notifications as a dependency

  return (
    <div className="lg:mx-[5rem] md:[1.5rem] mx-3 ">
      <BreadcrumbComp
        item="Notifications"
        color="#191919"
        path="/home"
        sepCol=""
      />
      <p className="font-[600] text-[24px] leading-[28.8px] text-[#0A0B0A] mb-11">
        Notifications
      </p>
      <div className="md:flex w-full bg-[#ffffff] pb-[6rem]">
        {notifications.length == 0 ? (
          <div className="w-full flex items-center justify-center md:h-[700px] h-[400px]">
            <img src={noti} alt="" width={200} />
          </div>
        ) : (
          <>
            <div
              className={`md:w-1/2 md:border-r-4 md:px-[4rem] px-2  ${
                MobileNotification ? "md:block hidden" : "block"
              }`}
            >
              <p className="my-5 font-[600] text-[16px] leading-[19.2px] text-[#DD1D30] md:mt-[5rem] md:pt-0 pt-11">
                {newMessages.length} new message
              </p>
              <div className="md:overflow-auto no-scrollbar md:h-screen">
                <div className="my-[2rem] ">
                  <ul className="space-y-4 ">
                    {notifications.map((notification) => (
                      <li
                        key={notification.id}
                        onClick={() => {
                          setSelectedNotification(notification);
                          setMobileNotification(true);
                        }} // Set selected notification
                        className={`cursor-pointer border-b pb-[1rem] mb-6 ${
                          selectedNotification?.id === notification.id
                            ? "text-[#7F7F7F]" // Change text color if selected
                            : ""
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <h3
                            className={`font-[600] text-[16px] leading-[19.2px] ${
                              selectedNotification?.id === notification.id
                                ? "text-[#7F7F7F]" // Change text color if selected
                                : "text-[#191919] "
                            }`}
                          >
                            {notification.title}
                          </h3>
                          <p
                            className={`text-[14px] leading-[16.8px] font-[400] mb-3 ${
                              selectedNotification?.id === notification.id
                                ? "text-[#7F7F7F]" // Change text color if selected
                                : "text-[#6B6B6B]"
                            }`}
                          >
                            {notification.date}
                          </p>
                        </div>
                        <p
                          className={`text-[14px] leading-[16.8px] font-[400] text-[#6B6B6B] mb-3 ${
                            selectedNotification?.id === notification.id
                              ? "text-[#7F7F7F]" // Change text color if selected
                              : "text-[#6B6B6B]"
                          }`}
                        >
                          {notification.sub_title}
                        </p>
                        <p
                          className={`text-[14px] leading-[16.8px] font-[400] text-[#6B6B6B] ${
                            selectedNotification?.id === notification.id
                              ? "text-[#7F7F7F]" // Change text color if selected
                              : "text-[#6B6B6B]"
                          }`}
                        >
                          {truncateMessage(notification.message, 20)}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div
              className={`md:w-1/2 px-[1rem] my-[5rem]  ${
                MobileNotification == false ? "md:block hidden" : "block"
              }`}
            >
              <ArrowLeft
                className={`mb-[3rem] mt-4 ${
                  MobileNotification ? "md:hidden block " : "hidden"
                }`}
                onClick={() => setMobileNotification(false)}
              />

              {selectedNotification ? (
                <>
                  <div className="flex justify-between">
                    <h2 className="font-[600] text-[16px] leading-[19.2px] text-[#424242]">
                      {selectedNotification.title}
                    </h2>
                    <span className="font-[400] text-[14px] text-[#6B6B6B] leading-[16.8px]">
                      {selectedNotification.date}
                    </span>
                  </div>
                  <p
                    className={`text-[14px] leading-[16.8px] font-[400] text-[#6B6B6B]
                       my-5
                  `}
                  >
                    {selectedNotification.sub_title}
                  </p>
                  <p className="`text-[14px] leading-[1p.8px] font-[400] text-[#6B6B6B]">
                    {selectedNotification.message}
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <button
                      className="text-[#DD1D30] mr-4 text-[14px] font-[500] leading-[16.8px] flex items-center gap-1"
                      onClick={() => handleDelete(selectedNotification.id)}
                    >
                      <Trash2 size={18} />
                      Delete message
                    </button>
                    <button
                      className="text-[#191919] mr-4 text-[14px] font-[500] leading-[16.8px] flex items-center gap-1"
                      onClick={() =>
                        handleMarkAsUnread(selectedNotification.id)
                      }
                    >
                      <MailCheckIcon size={18} />
                      Mark as unread
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-gray-500">
                  Select a notification to view details
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NotificationPanel;

// Mock notification data

//
const notificationsData: Notification[] = [
  {
    id: 1,
    title: "Welcome Aboard!",
    sub_title: "Your journey begins here",
    date: "17/09/2024",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lorem hendrerit, semper est sit amet, tempor lorem. Phasellus aliquet leo et dui ultrices, et auctor massa tincidunt. Donec aliquet, magna eget dictum cursus, risus lectus auctor turpis, et tincidunt purus risus id orci. Donec pretium feugiat tortor. Fusce ultricies non enim sit amet scelerisque. Nulla in tempor quam. Integer nec risus sed justo tincidunt venenatis ut nec tortor. Nam nec dui risus. Donec nec risus vehicula, auctor arcu a, tincidunt nulla.",
    isNew: true,
  },
  {
    id: 2,
    title: "Reminder of next payment date",
    sub_title: "Stay on track with payments",
    date: "17/09/2024",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Praesent quis lobortis dui. Mauris commodo luctus enim, sed suscipit neque gravida eu. Sed egestas libero enim, ac vulputate lorem vulputate id. Fusce a quam convallis, tincidunt magna at, lacinia libero. Integer ultricies metus nec quam lacinia convallis. Nam convallis semper odio. Praesent sed felis sit amet libero accumsan tincidunt. In dictum ante ac tempor vulputate. Nam gravida mauris lectus, eget facilisis orci dignissim et.",
    isNew: false,
  },
  {
    id: 3,
    title: "Amount of debt arrears",
    sub_title: "Important notice regarding debt",
    date: "12/09/2024",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique diam eu sem scelerisque, nec consequat lacus malesuada. Vestibulum viverra dictum arcu id dapibus. Donec ut venenatis augue. Nulla euismod, enim id tincidunt rutrum, erat nulla tincidunt mi, eget mollis arcu lorem sit amet orci. Vivamus placerat, nulla et gravida convallis, orci nisi faucibus arcu, id suscipit purus neque euismod felis. Fusce in facilisis tortor. Vestibulum ac lorem aliquam, suscipit tortor a, rutrum mauris. Mauris quis nulla quam.",
    isNew: true,
  },
  {
    id: 4,
    title: "Accrued interest on the debt",
    sub_title: "Interest details available",
    date: "11/09/2024",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Sed viverra lorem id nulla efficitur, at ultricies justo accumsan. Phasellus euismod nisi vel sapien vehicula, vitae fermentum orci pharetra. Etiam nec fringilla enim. Duis malesuada eu nulla a cursus. Mauris non justo et dolor scelerisque pharetra nec quis mi. Ut blandit sollicitudin libero, ut fermentum leo. Pellentesque auctor nisi eu nulla porttitor, nec elementum felis aliquam. Ut quis ligula bibendum, tincidunt velit et, tristique risus.",
    isNew: false,
  },
  {
    id: 5,
    title: "Action required: Verify your email",
    sub_title: "Please verify your account email",
    date: "10/09/2024",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum nisi at elit consectetur dapibus. In ornare turpis et justo pretium, vel interdum ex lacinia. Duis porttitor nunc sit amet quam viverra, ac eleifend felis bibendum. Phasellus at erat a libero ultricies volutpat. In hac habitasse platea dictumst. Mauris pretium eu mi at tincidunt. Integer dignissim felis vel erat hendrerit, et aliquet sem gravida. Quisque auctor risus non justo sodales, non condimentum metus vulputate. Mauris pellentesque orci id volutpat aliquam.",
    isNew: true,
  },
  {
    id: 6,
    title: "Upcoming changes to terms and conditions",
    sub_title: "Policy updates are coming",
    date: "09/09/2024",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec dolor sit amet metus pretium tristique. Curabitur vel risus et eros faucibus faucibus. Pellentesque egestas felis vel sapien pulvinar, ac cursus magna lobortis. Nam cursus sem ac sem posuere, at feugiat sem viverra. Duis laoreet velit ut orci pellentesque vulputate. Aliquam eget lectus enim. Fusce dictum tincidunt ultricies. Nam fringilla risus in volutpat venenatis. Pellentesque mollis, odio ut posuere luctus, orci purus tincidunt sapien, nec pharetra ipsum neque vitae enim.",
    isNew: true,
  },
  {
    id: 7,
    title: "Reminder: Complete your profile",
    sub_title: "Don’t forget to finish your profile",
    date: "08/09/2024",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor purus sit amet erat pharetra, sit amet ullamcorper ligula finibus. Phasellus vel massa vitae ligula malesuada accumsan. Donec venenatis sem sed tellus vehicula, at viverra ligula ultricies. Ut scelerisque lectus id augue vestibulum interdum. Curabitur non risus vel erat auctor volutpat. Etiam feugiat augue vitae metus congue vehicula. Maecenas ut mauris id sem suscipit vestibulum. Nullam eget ex at mauris vehicula vehicula et at lectus. Nulla et eros nec libero rutrum.",
    isNew: false,
  },
  {
    id: 8,
    title: "Your account will expire soon",
    sub_title: "Time-sensitive account notification",
    date: "07/09/2024",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis felis ut nisi tincidunt aliquet. Aliquam venenatis felis quis quam gravida, vitae tincidunt nulla posuere. Duis finibus leo at diam tempus, at volutpat odio luctus. Nam consequat nisl sit amet vehicula volutpat. Etiam interdum malesuada felis, ac convallis odio pharetra at. Curabitur accumsan purus id turpis condimentum, in sodales lectus pellentesque. Aenean id eros nulla. Aenean consectetur dictum libero, sed suscipit magna rhoncus non. Donec sodales congue suscipit.",
    isNew: true,
  },
  {
    id: 9,
    title: "Overdue payment reminder",
    sub_title: "Payment is overdue",
    date: "06/09/2024",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada tellus non libero iaculis, ut facilisis libero vehicula. Vestibulum pretium felis vel felis tristique, eget vehicula justo varius. Donec feugiat orci sit amet venenatis rutrum. In quis consectetur magna, id suscipit tortor. Ut blandit lectus metus, ut cursus urna ornare sit amet. Nulla vel urna vel sapien auctor malesuada. Fusce eget ligula ac erat euismod eleifend. Mauris ac volutpat ligula. Donec consequat tortor in nisl fermentum accumsan.",
    isNew: false,
  },
  {
    id: 10,
    title: "New update available",
    sub_title: "Update your application now",
    date: "05/09/2024",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac justo nec justo consequat ullamcorper. Nulla ac odio mi. Sed mollis velit id velit pharetra malesuada. In hac habitasse platea dictumst. Quisque eget volutpat ligula. Curabitur ac mauris metus. Suspendisse aliquam metus eget metus interdum, vel laoreet risus lacinia. Duis blandit felis orci, vitae elementum neque pretium ac. Nulla aliquet, velit ac varius interdum, magna eros efficitur elit, eget pellentesque metus velit sed tortor.",
    isNew: true,
  },
];
