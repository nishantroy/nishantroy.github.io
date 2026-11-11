---
name: Phone Lockbox
tagline: Locks your phone at bedtime.
hook: "Shields everything but the essentials until morning, using Apple's Screen Time APIs."
order: 4
tint: "#2b2942"
platform: iPhone
stack: [SwiftUI, FamilyControls, DeviceActivity]
status: TestFlight
# repo: https://github.com/nishantroy/lockbox  # TODO: uncomment once public
screenshot: ../../assets/projects/lockbox/1.webp
screenshotAlt: "Phone Lockbox home: a Lock now button and tonight's bedtime lock from 10:30 PM to 7:00 AM"
---
Uses FamilyControls, ManagedSettings and DeviceActivity with monitor and shield extensions. Enforced locally with no account; a trusted-person companion protocol is in prototype.
