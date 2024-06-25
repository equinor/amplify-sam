import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

import { useFeatureToggling } from 'src/hooks';

interface FeatureProps {
  featureKey: string;
  children: ReactNode;
  fallback?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  showIfKeyMissing?: boolean;
}

export const Feature: FC<FeatureProps> = ({
  featureKey,
  children,
  fallback,
  showIfKeyMissing = true,
}) => {
  const { showContent } = useFeatureToggling(featureKey, showIfKeyMissing);

  if (showContent) {
    return <>{children}</>;
  }

  return <>{fallback ?? null}</>;
};
