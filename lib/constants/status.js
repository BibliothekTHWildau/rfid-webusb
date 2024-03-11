'use strict'

const Status = {}

/// 00h OK / Success
Status.OK = 0x00

/// 01h No Transponder (Success)
Status.NoTransponder = 0x01

/// 02h Data False
Status.DataFalse = 0x02

/// 03h Write Error
Status.WriteError = 0x03

/// 04h Address Error
Status.AddressError = 0x04

/// 05h Wrong Transponder Type
Status.WrongTransponderType = 0x05

/// 08h Authentication Error
Status.AuthenticationError = 0x08

/// 0Bh Collision Error
Status.CollisionError = 0x0B

/// 0Eh General Error
Status.GeneralError = 0x0E

/// 10h EEPROM Failure
Status.EEPROMFailure = 0x10

/// 11h Parameter Range Error
Status.ParameterRangeError = 0x11

/// 13h Login Request
Status.LoginRequest = 0x13

/// 14h Login Error
Status.LoginError = 0x14

/// 15h Read Protect
Status.ReadProtect = 0x15

/// 16h Write Protect
Status.WriteProtect = 0x16

/// 17h Firmware Activation Required
Status.FirmwareActivationRequired = 0x17

/// 31h No SAM Detected
Status.NoSAMDetected = 0x31

/// 32h Requested SAM Is Not Activated
Status.RequestedSAMIsNotActivated = 0x32

/// 33h Requested SAM Is Already Activated
Status.RequestedSAMIsAlreadyActivated = 0x33

/// 34h Requested Protocol Not Supported By SAM
Status.RequestedProtocolNotSupportedBySAM = 0x34

/// 35h SAM Communication Error
Status.SAMCommunicationError = 0x35

/// 36h SAM Timeout
Status.SAMTimeout = 0x36

/// 37h SAM Unsupported Baudrate
Status.SAMUnsupportedBaudrate = 0x37

/// 80h Unknown Command
Status.UnknownCommand = 0x80

/// 81h Length Error
Status.LengthError = 0x81

/// 82h Command Not Available
Status.CommandNotAvailable = 0x82

/// 83h RF Communication Error
Status.RFCommunicationError = 0x83

/// 84h RF Warning
Status.RFWarning = 0x84

/// 85h EPC Error
Status.EPCError = 0x85

/// 93h Data Buffer Overflow
Status.DataBufferOverflow = 0x93

/// 94h More Data
Status.MoreData = 0x94

/// 95h ISO 15693 Error
Status.ISO15693Error = 0x95

/// 96h ISO 14443 Error
Status.ISO14443Error = 0x96

/// 97h Crypto Processing Error
Status.CryptoProcessingError = 0x97

/// F1h Hardware Warning
Status.HardwareWarning = 0xF1

Status.getFromValue = value => {
  return Object.keys(Status).find(key => Status[key] == value)
}

export { Status }