import {extendTheme} from 'native-base';

export const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        _text: {fontWeight: 'bold'},
        rounded: 50,
        px: 16,
      },
      variants: {
        outline: ({colorScheme}: any) => {
          return {
            borderColor: `${colorScheme}.600`,
            border: 2,
          };
        },
      },
    },
    FormControlLabel: {
      baseStyle: {
        ml: 4,
        mb: 0,
        _text: {fontSize: 'sm'},
      },
    },
    Input: {
      baseStyle: {
        borderRadius: 8,
        fontWeight: 700,
        placeholderTextColor: 'gray.300',
      },
      variants: {
        outline: {
          borderWidth: 1,
        },
      },
    },

    Heading: {
      baseStyle: {
        color: 'main.text',
      },
    },

    Text: {
      baseStyle: {
        color: 'main.text',
      },
    },
  },

  colors: {
    primary: {
      50: '#F2F5FF',
      100: '#CCDAFF',
      200: '#CCDAFF',
      300: '#99B4FF',
      400: '#99B4FF',
      500: '#4174ff',
      600: '#4174ff',
      700: '#3770ED',
      800: '#0044FF',
      900: '#0044FF',
      1000: '#062562',
    },
    secondary: {
      50: '#FFF4E6',
      100: '#FFCE91',
      200: '#FFCE91',
      300: '#FFAC44',
      400: '#FFAC44',
      500: '#E68917',
      600: '#E68917',
      700: '#E68917',
      800: '#B36200',
      900: '#B36200',
    },
    gray: {
      50: '#F7F9FC',
      100: '#D8DBE6',
      200: '#D8DBE6',
      300: '#A8B0C9',
      400: '#A8B0C9',
      500: '#5A6995',
      600: '#5A6995',
      700: '#5A6995',
      800: '#132148',
      900: '#132148',
    },
    grey: {
      50: '#F7F9FC',
      100: '#D8DBE6',
      200: '#D8DBE6',
      300: '#A8B0C9',
      400: '#A8B0C9',
      500: '#5A6995',
      600: '#5A6995',
      700: '#5A6995',
      800: '#132148',
      900: '#132148',
    },
    error: {
      100: '#ffbeb1',
      200: '#ffbeb1',
      300: '#ffbeb1',
      600: '#FF7357',
      700: '#FF7357',
    },
    green: {
      100: '#bbefe3',
      200: '#a5e9d9',
      300: '#77dec7',
      500: '#4ad3b4',
      600: '#1dc8a1',
      700: '#1dc8a1',
      900: '#17a081',
    },
    custom: {
      600: '#ffffff',
    },

    main: {
      primary: '#BD622A',
      bgColor: '#F4E8E1',
      tertiary: '#000000',
      white: '#ffffff',
      text: '#5A6995',
      error: '#FF7357',
      backdrop: '#13214899',
    },
  },
  fontConfig: {
    NunitoSans: {
      100: {
        normal: 'NunitoSans-Light',
        italic: 'NunitoSans-LightItalic',
      },
      200: {
        normal: 'NunitoSans-Light',
        italic: 'NunitoSans-LightItalic',
      },
      300: {
        normal: 'NunitoSans-Light',
        italic: 'NunitoSans-LightItalic',
      },
      400: {
        normal: 'NunitoSans-Regular',
        italic: 'NunitoSans-Italic',
      },
      500: {
        normal: 'NunitoSans-Regular',
        italic: 'NunitoSans-Italic',
      },
      600: {
        normal: 'NunitoSans-SemiBold',
        italic: 'NunitoSans-SemiBoldItalic',
      },
      700: {
        normal: 'NunitoSans-Bold',
        italic: 'NunitoSans-BoldItalic',
      },
      800: {
        normal: 'NunitoSans-ExtraBold',
        italic: 'NunitoSans-ExtraBoldItalic',
      },
      900: {
        normal: 'NunitoSans-Black',
        italic: 'NunitoSans-BlackItalic',
      },
    },
  },
  fonts: {
    heading: 'NunitoSans',
    body: 'NunitoSans',
    mono: 'NunitoSans',
  },
});
