<template>
  <div :class="$style.signUpContainer">
    <h1 :class="$style.label">
      <slot name="label" />
    </h1>
    <p :class="$style.greetings">
      <slot name="greetings" />
    </p>
    <div>
      <div :class="$style.field">
        <slot name="emailField" />
      </div>
      <div :class="$style.field">
        <slot name="passwordField" />
      </div>
      <div :class="$style.formOptions">
        <div :class="$style.remember">
          <slot name="rememberCheckbox" />
        </div>
        <div>
          <slot name="forgotPasswordLink" />
        </div>
      </div>
      <div :class="$style.submit">
        <slot name="submit" />
      </div>
      <div :class="$style.signUpLink">
        <slot name="signUpLink" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

.signUpContainer {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.label {
  @include h1;
  margin-top: 40px;
  color: rgb(var(--color-accent-1));
}

.field {
  margin-top: 40px;
  &:not(:first-child) {
    margin-top: 20px;
  }
}

.greetings {
  @include text;
  margin-top: 10px;
  color: rgb(var(--color-accent-2));
}

.formOptions {
  margin-top: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.remember {
}

.submit {
  margin-top: 40px;
}

.signUpLink {
  margin-top: 25px;
  text-align: center;
}
</style>
