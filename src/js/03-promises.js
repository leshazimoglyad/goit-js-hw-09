import Notiflix from 'notiflix';
const refs = {
  inputDelay: document.querySelector(`input[name="delay"]`),
  inputStep: document.querySelector(`input[name="step"]`),
  inputAmount: document.querySelector(`input[name="amount"]`),
  submitBtn: document.querySelector(`button[type="submit"]`),
};
const { inputDelay, inputAmount, inputStep, submitBtn } = refs;
submitBtn.addEventListener('click', onSubmitBtn);

function createPromise(amountValue, delayValue) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(amountValue, delayValue);
    } else {
      reject(amountValue, delayValue);
    }
  });
}
// sff
function onSubmitBtn(evt) {
  let delayValue = Number(inputDelay.value);
  let stepValue = Number(inputStep.value);
  let amountValue = Number(inputAmount.value);
  console.log(delayValue, stepValue, amountValue);
  evt.preventDefault();
  for (let position = 1; position <= amountValue; position += 1) {
    let curPos = position;
    let curDelay = delayValue;
    setTimeout(
      () =>
        createPromise(position, delayValue)
          .then(({ position, delayValue }) => {
            Notiflix.Notify.info(
              `✅ Fulfilled promise ${curPos} in ${curDelay} ms`
            );
          })
          .catch(({ position, delayValue }) => {
            Notiflix.Notify.failure(
              `✅ Fulfilled promise ${curPos} in ${curDelay} ms`
            );
          }),
      delayValue
    );
    delayValue += stepValue;
  }
}