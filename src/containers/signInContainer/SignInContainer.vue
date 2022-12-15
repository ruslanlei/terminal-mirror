<template>
  <div :class="$style.signInContainer">
    <header :class="$style.header">
      <div>
        <slot name="logo" />
      </div>
      <div>
        <slot name="languageSelect" />
      </div>
    </header>
    <div :class="$style.description">
      <slot name="description" />
    </div>
    <h3 :class="$style.label">
      <slot name="label" />
    </h3>
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
          <slot name="signUpLink" />
        </div>
      </div>
      <div :class="$style.submit">
        <slot name="submit" />
      </div>
    </div>
    <footer :class="$style.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style lang="scss" module>
@import "@/assets/styles/utils";

.signInContainer {
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.description {
  margin-top: 25px;
  @include text;
  font-weight: 500;
  color: rgb(var(--color-accent-1));
}

.label {
  @include h3;
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

.footer {
  margin-top: auto;
}
</style>
