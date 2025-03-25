// components/NestedSidebar.js
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { ChevronDown } from 'lucide-react';
import Icon from '@/components/ui-custom/Icon';
import { useState } from 'react';
import { motion } from "motion/react"

const NestedSidebar = ({ items }: any) => {

  const [sidebarItems, setSidebarItems] = useState(items);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {sidebarItems.map((item: any, index: number) => {



        return (
          <div

            key={index}>
            {!item?.url ? (
              <motion.div>

                <Collapsible open={item?.isOpen} onOpenChange={(open) => {
                  item.isOpen = open;
                  setSidebarItems([...sidebarItems]);
                }}>
                  <CollapsibleTrigger asChild>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex justify-between items-center px-2 py-2 hover:bg-gray-700"
                    >
                      <span

                        className="flex items-center gap-2">
                        {item?.icon && <Icon name={item.icon} size={18} />} {item.title}
                      </span>
                      <motion.span

                        initial={false}
                        animate={{
                          rotate: item.isOpen ? 0 : 180,
                          transition: { duration: 0.5 },
                        }}
                      >
                        <ChevronDown size={18} />
                      </motion.span>

                    </motion.button>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="ml-6 flex flex-col">
                    {item.children.map((child: any, index: number) => (
                      child?.url ?

                        <motion.a

                          key={index}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={child?.url || "#"}
                          className="p-2 hover:bg-gray-700 rounded flex items-center gap-2"
                        >
                          {child?.icon && <Icon name={child.icon} size={18} />} {child.title}
                        </motion.a>
                        :

                        <div key={index} className="flex flex-col">
                          {
                            child.children && NestedSidebar({ items: child.children })

                          }
                        </div>

                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>

            ) : (
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <motion.a
                    initial={false}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      transition: { duration: 0.5 },
                    }}
                    className="cursor-pointer"
                    href={item?.url || "#"}
                  >
                    {item?.icon && <Icon name={item.icon} size={18} />}
                    <motion.span>{item.title}</motion.span>
                  </motion.a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}
          </div>
        );
      }


      )}
    </motion.div>
  );
};

export default NestedSidebar;