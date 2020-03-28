var keyboardEvent = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

keyboardEvent[initMethod](
  "keydown", // event type: keydown, keyup, keypress
  true,      // bubbles
  true,      // cancelable
  window,    // view: should be window
  false,     // ctrlKey
  false,     // altKey
  false,     // shiftKey
  false,     // metaKey
  40,        // keyCode: unsigned long - the virtual key code, else 0
  0          // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
);
document.dispatchEvent(keyboardEvent);

element.dispatchEvent(new KeyboardEvent('keypress',{'key':'a'}));
//ArrowRight ArrowLeft PageDown
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
//keydown keyup
var e = $.Event("keydown", {keyCode: 64});
input.dispatchEvent(new KeyboardEvent('keypress',  {'key':'h'}));
input.dispatchEvent(new KeyboardEvent('keydown',  {'key':'e'}));
input.dispatchEvent(new KeyboardEvent('keyup', {'key':'y'}));
// get the element in question
const input = document.getElementsByTagName("input")[0];

// focus on the input element
input.focus();

// add event listeners to the input element
input.addEventListener('keypress', (event) => {
  console.log("You have pressed key: ", event.key);
});

input.addEventListener('keydown', (event) => {
  console.log(`key: ${event.key} has been pressed down`);
});

input.addEventListener('keyup', (event) => {
  console.log(`key: ${event.key} has been released`);
});

#jigsaw-placeholder-inner > div.vertical-button-wrapper.next-wrapper > button
#jigsaw-placeholder-inner > div.horizontal-button-wrapper.next-wrapper > button