import { useRef, useState } from "react";
import classNames from "classnames";
import { categories_data } from "../data/cards";
import { deals_data } from "../data/data";

function getPreviousIndex(current, elements) {
  for (let index = current - 1; index >= 0; index -= 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  for (let index = elements.length - 1; index > -1; index -= 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  return current;
}

function getNextIndex(current, elements) {
  for (let index = current + 1; index < elements.length; index += 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  for (let index = 0; index < elements.length; index += 1) {
    if (!elements[index].disabled) {
      return index;
    }
  }
  return current;
}

export default function Deals() {
  const tablistRef = useRef(null);
  const [activeTab, setActiveTab] = useState(categories_data[0]);
  const isActive = (tab) => activeTab.label === tab.label;
  const tabId = (label) => `${label}-tab`;
  const panelId = (label) => `${label}-panel`;

  const handleKeyDown = (event) => {
    const elements = Array.from(
      tablistRef.current?.querySelectorAll <
        HTMLButtonElement >
        '[role="tab"]' || []
    );
    const current = elements.findIndex((el) => event.currentTarget === el);
    const nextTab = getNextIndex(current, elements);
    const prevTab = getPreviousIndex(current, elements);
    const lastTab = elements.length - 1;

    const goTo = (index) => () => {
      event.stopPropagation();
      event.preventDefault();
      const goToElement = elements[index];
      goToElement.focus();
      goToElement.click();
      goToElement.scrollIntoView();
    };

    const interactionsMap = new Map([
      ["ArrowLeft", goTo(prevTab)],
      ["ArrowRight", goTo(nextTab)],
      ["Home", goTo(0)],
      ["End", goTo(lastTab)],
    ]);

    const interaction = interactionsMap.get(event.key);
    interaction?.();
  };

  return (
    <>
      <div
        ref={tablistRef}
        role="tablist"
        aria-label="Select tab"
        aria-orientation="horizontal"
        className="flex gap-2 border-b border-b-neutral-200 overflow-x-auto  pb-2"
      >
        {categories_data.map((tab) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            id={tabId(tab.label)}
            aria-controls={panelId(tab.label)}
            aria-selected={isActive(tab)}
            disabled={tab.disabled}
            tabIndex={isActive(tab) ? 0 : -1}
            onClick={() => setActiveTab(tab)}
            onKeyDown={handleKeyDown}
            className={classNames(
              "px-4 py-2 rounded-md font-medium whitespace-nowrap text-neutral-500 hover:enabled:bg-primary-100 hover:enabled:text-black active:enabled:bg-primary-200 active:enabled:text-black focus-visible:outline focus-visible:-outline-offset-2 focus-visible:shadow-[inset_0_0_0_4px_rgb(255,255,255)]",
              { "!bg-primary-100 !text-black": isActive(tab) }
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {categories_data.map((tab) => (
        <div
          key={tab.label}
          role="tabpanel"
          id={panelId(tab.label)}
          aria-labelledby={tabId(tab.label)}
          className="grid grid-cols-4 gap-4 py-4"
        >
          {isActive(tab) && (
            <>
              {deals_data
                .filter((ele) => ele.category.indexOf(tab.label) !== -1)
                .map(({ image, logo, name, subtitle, title }) => (
                  <div
                    key={title}
                    className="flex flex-col relative border border-neutral-200 rounded-md hover:shadow-xl h-[22rem] mb-2"
                  >
                    <a
                      className="absolute inset-0 z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
                      href="#"
                      aria-label={title}
                    />
                    <img
                      src={image}
                      alt={title}
                      className="object-cover h-auto rounded-t-md aspect-video"
                    />
                    <div className="flex flex-col items-start p-4 grow  bg-blue-50 space-y-3 relative">
                      <img
                        className="rounded-full absolute right-6 -top-8"
                        src={logo}
                        alt={title}
                        width="70"
                        height="70"
                      />
                      <p className="typography-text-base font-semibold">
                        {name}
                      </p>
                      <p className="font-medium typography-text-base line-clamp-2">
                        {title}
                      </p>
                      <p className="mt-1 mb-4 font-normal typography-text-sm line-clamp-2">
                        {subtitle}
                      </p>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      ))}
    </>
  );
}
