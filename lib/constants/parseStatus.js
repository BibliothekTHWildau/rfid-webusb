'use strict'

const ParseStatus = {}

ParseStatus.Success = 0
ParseStatus.MoreDataNeeded = 1
ParseStatus.ChecksumError = -1
ParseStatus.FrameError = -2

export { ParseStatus }