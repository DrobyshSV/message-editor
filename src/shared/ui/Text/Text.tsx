import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type ParagraphsFontWeightType = 'medium' | 'roman' | 'heavy'

export type TextType =
  'h1'
  | 'h2'
  | 'h2_alt'
  | 'h3'
  | 'h3_alt'
  | 'h4'
  | 'h4_alt'
  | 'h5'
  | 'body'
  | 'body2'
  | 'caption'
  | 'tiny';

interface TextProps {
  className?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  type?: TextType;
  fontWeight?: ParagraphsFontWeightType
}

type TextTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';

const mapTypeToClass: Record<TextType, string> = {
  h1: styles.type_h1,
  h2: styles.type_h2,
  h2_alt: styles.type_h2Alt,
  h3: styles.type_h3,
  h3_alt: styles.type_h3Alt,
  h4: styles.type_h4,
  h4_alt: styles.type_h4Alt,
  h5: styles.type_h5,
  body: styles.type_body,
  body2: styles.type_body2,
  caption: styles.type_caption,
  tiny: styles.type_tiny,

};

const mapTypeToHeaderTag: Record<TextType, TextTagType> = {
  h1: 'h1',
  h2: 'h2',
  h2_alt: 'h2',
  h3: 'h3',
  h3_alt: 'h3',
  h4: 'h4',
  h4_alt: 'h4',
  h5: 'h5',
  body: 'p',
  body2: 'p',
  caption: 'p',
  tiny: 'p',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    variant = 'primary',
    align = 'left',
    type = 'body',
    fontWeight,
  } = props;

  const TextTag = mapTypeToHeaderTag[type];
  const typeClass = mapTypeToClass[type];
  const additionalClasses = [
    className,
    styles[variant],
    styles[align],
    typeClass,
  ];
  if (fontWeight) {
    additionalClasses.push(styles[fontWeight])
  }
  return (
    <TextTag className={classNames(
      styles.Text,
      {},
      additionalClasses,
    )}>{text}</TextTag>
  );
});
