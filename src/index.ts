import { $, usePowerShell } from 'zx'
import semver from 'semver'
import os from 'os'

if (os.platform() === 'win32') {
    usePowerShell()
}

// $`git describe --exact-match --tags HEAD`

(async () => {
    const version = await $`git describe --tags --abbrev=0`

    // console.log(version)

    console.log(version.stdout.trim())
}
)()
