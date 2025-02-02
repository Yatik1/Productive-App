import { Tabs } from "@/components/Tabs";
import { Colors } from "@/constants/Colors";

const Layout = () => {
    return (
        <Tabs
          ignoresTopSafeArea
          hapticFeedbackEnabled
          screenOptions={{
            tabBarActiveTintColor:Colors.primary,
          }}
        >
        <Tabs.Screen
          name="today"
          options={{
            title: 'Today',
            tabBarIcon: ({ focused }: { focused: boolean }) => ({
              sfSymbol: focused ? 'calendar.circle.fill' : 'calendar.circle',
            }),
          }}
        />
        <Tabs.Screen
          name="browse"
          options={{
            title: 'Profile',
            tabBarIcon: ({ focused }: { focused: boolean }) => ({
              sfSymbol: focused ? 'person.circle' : 'person.circle.fill',
            }),
          }}
        />
      </Tabs>
    )
}

export default Layout