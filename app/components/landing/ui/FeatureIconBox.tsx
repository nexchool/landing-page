type FeatureIconBoxProps = {
  background: string;
  children: React.ReactNode;
};

export function FeatureIconBox({ background, children }: FeatureIconBoxProps) {
  return (
    <div className="fb-icon" style={{ background }}>
      {children}
    </div>
  );
}
