// components/NestedSidebar.js
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { ChevronDown } from 'lucide-react';
import Icon from '@/components/ui-custom/Icon';
import { useState } from 'react';
import { motion } from "motion/react"

export type NestedSidebarItem = {
  title: string;
  icon?: string;
  url?: string;
  isOpen?: boolean;
  children?: NestedSidebarItem[];
  onClick?: () => void;
};

const DropdownButton = (item: NestedSidebarItem) => {

  const [isOpen, setIsOpen] = useState(item.isOpen);

  return (
    <motion.div>

      <Collapsible open={isOpen} onOpenChange={(open) => {
        setIsOpen(open);
        if (item.onClick) {
          item.onClick();
        }
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
                rotate: isOpen ? 0 : 180,
                transition: { duration: 0.5 },
              }}
            >
              <ChevronDown size={18} />
            </motion.span>

          </motion.button>
        </CollapsibleTrigger>

        <CollapsibleContent className="ml-6 flex flex-col">
          {item.children?.map((childItem: NestedSidebarItem, index: number) => (
            <div key={index} className="flex flex-col">
              {!childItem?.children ?
                <LinkButton {...childItem} />
                :
                <DropdownButton {...childItem} />
              }
            </div>

          )

          )}
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  );
};

const LinkButton = (item: NestedSidebarItem) => {
  return (
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
          href={item?.url ?? "#"}
        >
          {item?.icon && <Icon name={item.icon} size={18} />}
          <motion.span>{item.title}</motion.span>
        </motion.a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

const NestedSidebar = ({ items }: { items: NestedSidebarItem[] }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {items.map((item: NestedSidebarItem, index: number) => {

        const hasChildren = item?.children != null && item.children.length > 0;



        return (
          <div

            key={index}>
            {hasChildren ? (
              <DropdownButton {...item} />
            ) : (
              <LinkButton {...item} />
            )}
          </div>
        );
      }


      )}
    </motion.div>
  );
};

export default NestedSidebar;