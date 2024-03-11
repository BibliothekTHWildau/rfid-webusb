'use strict'

const ISOStandardCommands = {}

/// 00h None
ISOStandardCommands.None = 0x00

/// 01h Inventory
ISOStandardCommands.Inventory = 0x01

/// 23h Read Multiple Blocks
ISOStandardCommands.ReadMultipleBlocks = 0x23

/// 24h Write Multiple Blocks
ISOStandardCommands.WriteMultipleBlocks = 0x24

// 2Bh GetSystemInformation
ISOStandardCommands.GetSystemInformation = 0x2B

// 27h WriteAFI
ISOStandardCommands.WriteAFI = 0x27

/// 25h Select
ISOStandardCommands.Select = 0x25

ISOStandardCommands.getFromValue = value => {
    return Object.keys(ISOStandardCommands).find(key => ISOStandardCommands[key] == value)
}

export { ISOStandardCommands }
