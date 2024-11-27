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
        color: colors.primary1,
        marginBottom: 5,
    },
    textInput: {
        fontSize: 16,
        height: 40,
        borderColor: colors.primary1,
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
    toggleButton: {
        //...niceButton,
        alignItems: 'center',
        opacity: 0.8,
        padding: 10,
        borderRadius: 5,
        borderWidth: 0,
        margin: 5,
    },
    toggleButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    toggleButtonOff: {
        backgroundColor: colors.secondary3,
    },
    toggleButtonOn: {
        backgroundColor: colors.primary1,
    },
    toggleButtonTextOff: {
        color: colors.secondary4,
    },
    toggleButtonTextOn: {
        color: colors.secondary3,
    },
    toggleButtonLine: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        padding: 20,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10,
        backgroundColor: colors.secondary3,
        alignItems: 'center',
    },
    headerText: {
        color: colors.secondary4,
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
    menuItemName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: colors.secondary4,
    },
    menuItemDescription: {
        fontSize: 16,
        color: colors.primary1,
        marginTop: 10,
    },
    menuItemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: colors.primary1,
    },
    heroBox: {
        backgroundColor: colors.primary1,
        paddingLeft: 20
    },
    heroHeader: {
        fontSize: 64,
        fontFamily: 'MarkaziText-Regular',
        color: colors.primary2,
        marginBottom: 0
    },
    heroSubHeader: {
        fontSize: 32,
        marginTop: 0,
        lineHeight: 32,
        fontFamily: 'MarkaziText-Regular',
        color: colors.secondary3
    },
    heroText: {
        color: colors.secondary3
    },
    heroImage: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        marginRight: 10,
        resizeMode: 'cover'
    }
}