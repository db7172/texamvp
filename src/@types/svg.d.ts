type SvgComponent = React.FunctionComponent<React.SVGAttributes<SVGElement>>;

declare module "*.svg" {
  const ReactComponent: SvgComponent;
  const path: string; // Fix it with url-loader

  export { ReactComponent };
  export default path;
}
