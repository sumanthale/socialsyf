import { useId, useRef, useState } from "react";
import classNames from "classnames";
import {
  SfIconExpandMore,
  SfListItem,
  useDisclosure,
  useDropdown,
  SfIconCheck,
  useTrapFocus,
  InitialFocusType,
  SfTextarea,
} from "@storefront-ui/react";

const options = [
  {
    label: "Woods 34L Men's Hiking Backpack",
    value: "Woods 34L Men's Hiking Backpack",
  },
  {
    label: "Nike Sport V2",
    value: "Nike Sport V2",
  },
];

export default function Dispute() {
  const { close, toggle, isOpen } = useDisclosure({ initialValue: false });
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const id = useId();
  const listboxId = useId();
  const selectTriggerRef = useRef(null);

  const { refs, style: dropdownStyle } = useDropdown({
    isOpen,
    onClose: close,
  });

  useTrapFocus(refs.floating, {
    arrowKeysUpDown: true,
    activeState: isOpen,
    initialFocus: InitialFocusType.autofocus,
    initialFocusContainerFallback: true,
  });

  const selectOption = (option) => {
    setSelectedOption(option);
    close();
    selectTriggerRef.current?.focus();
  };

  const handleTriggerKeyDown = (event) => {
    if (event.key === " ") toggle();
  };

  const handleOptionItemKeyDown = (event, option) => {
    if (event.key === " " || event.key === "Enter") selectOption(option);
  };

  return (
    <div className="p-3 h-96">
      <label className="font-medium typography-label-sm" htmlFor={id}>
        Select Order You Want to Raise Dispute
      </label>
      <div ref={refs.setReference} className="relative mb-2">
        <div
          ref={selectTriggerRef}
          id={id}
          role="combobox"
          aria-controls={listboxId}
          aria-expanded={isOpen}
          aria-label="Select one option"
          aria-activedescendant={
            selectedOption ? `${listboxId}-${selectedOption.value}` : undefined
          }
          className="mt-0.5 flex items-center gap-8 relative font-normal typography-text-base ring-1 ring-neutral-300 ring-inset rounded-md py-2 px-4 hover:ring-primary-700 active:ring-primary-700 active:ring-2 focus:ring-primary-700 focus:ring-2 focus-visible:outline focus-visible:outline-offset cursor-pointer"
          tabIndex={0}
          onKeyDown={handleTriggerKeyDown}
          onClick={toggle}
        >
          {selectedOption ? (
            selectedOption.label
          ) : (
            <span className="text-neutral-500">Choose from the list</span>
          )}
          <SfIconExpandMore
            className={classNames(
              "ml-auto text-neutral-500 transition-transform ease-in-out duration-300",
              {
                "rotate-180": isOpen,
              }
            )}
          />
        </div>
        <ul
          id={listboxId}
          ref={refs.setFloating}
          role="listbox"
          aria-label="Select one option"
          className={classNames(
            "w-full py-2 rounded-md shadow-md border border-neutral-100 bg-white z-10",
            {
              hidden: !isOpen,
            }
          )}
          style={dropdownStyle}
        >
          {options.map((option) => (
            <SfListItem
              id={`${listboxId}-${option.value}`}
              key={option.value}
              role="option"
              tabIndex={0}
              aria-selected={option.value === selectedOption?.value}
              className={classNames("block", {
                "font-medium": option.value === selectedOption?.value,
              })}
              onClick={() => selectOption(option)}
              onKeyDown={(event) => handleOptionItemKeyDown(event, option)}
              slotSuffix={
                option.value === selectedOption?.value && (
                  <SfIconCheck className="text-primary-700" />
                )
              }
            >
              {option.label}
            </SfListItem>
          ))}
        </ul>
      </div>
      <label>
        <span className="typography-text-sm font-medium">Description</span>
        <SfTextarea
          value=""
          rows={5}
          className="w-full !bg-disabled-100 block"
        />
      </label>
      <p className="typography-hint-xs text-neutral-500 mt-0.5">
        Explain us the Issue.
      </p>

      <button
        onClick={() => {}}
        type="button"
        className="px-5 py-2 font-semibold tracki text-center rounded bg-primary-400 my-3 text-gray-900 "
      >
        Submit Request
      </button>
    </div>
  );
}
