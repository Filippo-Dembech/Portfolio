import { useEffect } from "react";

/**
 * Adds an event listener to the `document` element. For a complete list of possible events go to {@link https://developer.mozilla.org/en-US/docs/Web/Events#event_index MDN Events List}
 *
 * **IMPORTANT**: `useDocumentEvent` uses `useEffect` hook behind the scene, because of this dependency list **must be provided**.
 * @param {HTMLElement} element The element to attach the event listener to
 * @param {String} event The event that triggers `eventHandler`
 * @param {Function} eventHandler Function triggered when `event` occurs
 * @param {Array} dependencyList Dependency list for `useEffect` hook
 */
export function useEvent(HTMLElement, event, eventHandler, dependencyList) {
    useEffect(
        function () {
            HTMLElement.addEventListener(event, eventHandler);
            return () => {
                HTMLElement.removeEventListener(event, eventHandler);
            };
        },
        [...dependencyList]
    );
}
