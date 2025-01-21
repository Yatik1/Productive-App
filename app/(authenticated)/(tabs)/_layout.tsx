import { Tabs } from "@/components/Tabs";
import { Colors } from "@/constants/Colors";

const Layout = () => {
    return (
        <Tabs>
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
          name="upcoming"
          options={{
            title: 'Upcoming',
            tabBarIcon: () => ({ sfSymbol: 'calendar' }),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarIcon: ({ focused }: { focused: boolean }) => ({
              sfSymbol: focused ? 'text.magnifyingglass' : 'magnifyingglass',
            }),
          }}
        />
        <Tabs.Screen
          name="browse"
          options={{
            title: 'Browse',
            tabBarIcon: ({ focused }: { focused: boolean }) => ({
              sfSymbol: focused ? 'doc.text.image.fill' : 'doc.text.image',
            }),
          }}
        />
      </Tabs>
    )
}

export default Layout