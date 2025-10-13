import React from "react";

interface DropdownOption {
  text: string;
  value: string;
  onClick?: () => void;
}

interface HeadingBarItem {
  text: string;
  iconUrl?: string;
  onClick?: () => void;
  className?: string;
  iconPosition?: "before" | "after";
  dropdown?: {
    options: DropdownOption[];
    isOpen: boolean;
    onToggle: () => void;
  };
}

interface HeadingBarProps {
  item1?: HeadingBarItem;
  item2?: HeadingBarItem;
  item3?: HeadingBarItem;
  item4?: HeadingBarItem;
  item5?: HeadingBarItem;
  item6?: HeadingBarItem;
  item7?: HeadingBarItem;
  item8?: HeadingBarItem;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
}

const HeadingBar: React.FC<HeadingBarProps> = ({
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  className = "",
  backgroundColor = "#8B5CF6",
  textColor = "#FFFFFF",
}) => {
  const items = [item1, item2, item3, item4, item5, item6, item7, item8].filter(
    Boolean
  );

  const renderItem = (item: HeadingBarItem, index: number) => {
    const handleClick = () => {
      if (item.dropdown) {
        item.dropdown.onToggle();
      } else if (item.onClick) {
        item.onClick();
      }
    };

    const iconPosition = item.iconPosition || "before";
    const showIconBefore = item.iconUrl && iconPosition === "before";
    const showIconAfter = item.iconUrl && iconPosition === "after";

    return (
      <div
        key={index}
        onClick={handleClick}
        className={`
          relative flex items-center gap-2 
          cursor-${item.onClick || item.dropdown ? "pointer" : "default"}
          text-sm font-medium transition-all duration-150
          hover:text-opacity-90 ${item.className || ""}
        `}
      >
        {showIconBefore && (
          <img
            src={item.iconUrl}
            alt=""
            className={`object-contain ${!item.text ? 'w-6 h-6' : 'w-5 h-5'}`}
          />
        )}

        <span className="whitespace-nowrap">{item.text}</span>

        {showIconAfter && (
          <img
            src={item.iconUrl}
            alt=""
            className={`object-contain ${!item.text ? 'w-6 h-6' : 'w-5 h-5'}`}
          />
        )}

        {/* Dropdown */}
        {item.dropdown && item.dropdown.isOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-40">
            {item.dropdown.options.map((option, i) => (
              <div
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  option.onClick?.();
                }}
                className="
                  px-4 py-2 text-gray-700 text-sm font-medium 
                  hover:bg-gray-100 border-b border-gray-100 last:border-0
                "
              >
                {option.text}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`flex justify-between items-center px-6 py-2 min-h-10 shadow-sm ${className}`}
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      {/* Left Section */}
      <div className="flex items-center gap-6">
        {items.slice(0, 2).map((item, index) =>
          item ? renderItem(item, index) : null
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {items.slice(2).map((item, index) =>
          item ? renderItem(item, index + 2) : null
        )}
      </div>
    </div>
  );
};

export default HeadingBar;
