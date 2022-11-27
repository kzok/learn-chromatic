import { Input } from "./input";

export default {
  title: __filename,
  component: Input,
};

const noop = () => {};

export const Base = () => (
  <div>
    <h3>empty input</h3>
    <Input value="" onChange={noop} />
    <br />
    <h3>empty input with placeholder</h3>
    <Input value="" onChange={noop} placeholder="placeholder" />
    <br />
    <h3>input with value</h3>
    <Input defaultValue="value" placeholder="placeholder" />
    <br />
    <h3>disabled input</h3>
    <Input value="disabled" onChange={noop} disabled />
  </div>
);
