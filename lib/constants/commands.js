'use strict'

const Commands = {}

/// 00h None
Commands.None = 0x00

/// 52h Baud Rate Detection
Commands.BaudRateDetection = 0x52

/// 55h Start Flash Loader
Commands.StartFlashLoader = 0x55

/// 63h CPU Reset
Commands.CPUReset = 0x63

/// 64h System Reset
Commands.SystemReset = 0x64

/// 65h Get Software Version
Commands.GetSoftwareVersion = 0x65

/// 66h Get Reader Info
Commands.GetReaderInfo = 0x66

/// 69h RF Reset
Commands.RFReset = 0x69

/// 6Ah RF Output On/Off
Commands.RFOutputOnOff = 0x6A

/// 72h Set Output
Commands.SetOutput = 0x72

/// A0h Reader Login
Commands.ReaderLogin = 0xA0

/// 80h Read Configuration
Commands.ReadConfiguration = 0x80

/// 81h Write Configuration
Commands.WriteConfiguration = 0x81

/// 82h Save Configuration
Commands.SaveConfiguration = 0x82

/// 83h Set Default Configuration
Commands.SetDefaultConfiguration = 0x83

/// A2h Write Mifare Reader Keys
Commands.WriteMifareReaderKeys = 0xA2

/// B0h ISO Standard Host Command
Commands.ISOStandardHostCommand = 0xB0

/// B2h ISO14443 Special Host Command
Commands.ISO14443SpecialHostCommand = 0xB2

/// BDh ISO14443A Transparent Command
Commands.ISO14443ATransparentCommand = 0xBD

/// BEh ISO14443B Transparent Command
Commands.ISO14443BTransparentCommand = 0xBE

/// BCh Command Queue
Commands.CommandQueue = 0xBC

Commands.getFromValue = value => {
    return Object.keys(Commands).find(key => Commands[key] == value)
}

export { Commands }