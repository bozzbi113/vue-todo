import { required } from "vuelidate/lib/validators";
export const title = {
  required: {
    rule: required,
    msg: "Title required"
  }
};

export const content = {
  required: {
    rule: required,
    msg: "Content required"
  }
};

export const username = {
  required: {
    rule: required,
    msg: "Username required"
  }
};

export const password = {
  required: {
    rule: required,
    msg: "password required"
  }
};

const vrules = rules => {
  let temp = {};
  rules &&
    Object.keys(rules).map(key => {
      temp[key] = rules[key].rule;
    });

  return temp;
};

const vmsg = (validator, rules) => {
  let ruleKeyArr = Object.keys(rules);
  for (let i = 0; i < ruleKeyArr.length; i++) {
    if (!validator[ruleKeyArr[i]]) {
      return rules[ruleKeyArr[i]].msg;
    }
  }
};
export default { vrules, vmsg };
