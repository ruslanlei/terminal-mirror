<template>
  <div :class="$style.signInContainer">
    <h1 :class="$style.label">
      <slot name="label" />
    </h1>
    <p :class="$style.greetings">
      <slot name="greetings" />
    </p>
    <div>
      <div :class="$style.field">
        <slot name="userNameField" />
      </div>
      <div :class="$style.field">
        <slot name="emailField" />
      </div>
      <div :class="$style.field">
        <slot name="passwordField" />
      </div>
      <div :class="$style.field">
        <slot name="passwordConfirmField" />
      </div>
      <div :class="$style.agreement">
        <slot name="agreement" />
      </div>
      <div :class="$style.submit">
        <slot name="submit" />
      </div>
      <div :class="$style.signInLink">
        <slot name="signInLink" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "@/assets/styles/utils";

.signInContainer {
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

.agreement {
  margin-top: 22px;
}

.submit {
  margin-top: 40px;
}

.signInLink {
  margin-top: 25px;
  text-align: center;
}
</style>
