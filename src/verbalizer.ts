interface FunctionArgs<F extends (...args: any[]) => any> {
  func: F;
  args: F extends (...args: infer A) => any ? A : never;
}

const verbalize = <F extends (...args: any[]) => any>({
  func,
  args,
}: FunctionArgs<F>) => {
  console.log(`Function: ${func.name}`);
  console.log(
    `Arguments: ${args
      .map((arg, index) => {
        return index === args.length - 1
          ? `${arg.toString()}`
          : `${arg.toString()}`;
      })
      .toString()}`
  );
  console.log("Running...");
  console.log(`Result: ${func(...args)}`);
};

export default verbalize;
