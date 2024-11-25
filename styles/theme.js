const colors = {
    primary1: '#495E57',
    primary2: '#F4CE14',
    secondary1: '#EE9972',
    secondary2: '#FBDABB',
    secondary3: '#EDEFEE',
    secondary4: '#333333',
}

const niceButton = {
    alignItems: 'center',
    backgroundColor: colors.primary2,
    opacity: 0.8,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.secondary1,
    marginTop: 20,
    textColor: colors.primary1,
    fontSize: 16,
}

export const defaultTheme = {
    colors: {
        ...colors,
    },
    caption: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 5,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
        borderRadius: 5,
    },
    errorTextInput: {
        color: 'red',
        borderColor: 'red',
        borderWidth: 1,
    },
    niceButton: {
        ...niceButton,
    },
    niceGreenButton: {
        backgroundColor: colors.primary1,
        borderColor: colors.primary1,
        textColor: colors.secondary3,
    },
    niceWhiteButton: {
        backgroundColor: colors.primary3,
        borderColor: colors.secondary4,
        textColor: colors.secondary4,
    },
    checkBox: {
        color: colors.primary1,
        marginBottom: 10
    },
    checkBoxText: {
        fontSize: 14,
        color: colors.primary4,
        marginLeft: 10,
        marginBottom: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        padding: 20,
    },
    headerText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: 'black',
        marginBottom: 5,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.primary1,
        marginRight: 10,
    },
}