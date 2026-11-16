# PDF Reader Aloud - Android app (Hindi + English)

Reads any PDF aloud in Hindi and English (auto-detected per sentence), highlights the sentence
being read and scrolls the page along. Uses the phone's own text-to-speech.

## Files in this package
index.html, prepare.js, package.json, capacitor.config.json, README.md  -> upload these 5 to GitHub
build-apk.yml.txt -> paste into GitHub as .github/workflows/build-apk.yml (see step 3)

## Build the APK free on GitHub (no installs)
1. Make a new repository on github.com. Click "uploading an existing file" and drag in the 5 files above.
   Commit changes.
2. (Skip) Do NOT upload build-apk.yml.txt as a file.
3. Add file > Create new file. Name it exactly:  .github/workflows/build-apk.yml
   Paste the full contents of build-apk.yml.txt and commit.
4. Open the Actions tab. The "Build APK" run starts by itself (about 5 minutes). Wait for the green tick.
5. Open the run, scroll to Artifacts, download PDF-Reader-Aloud-APK, unzip, install app-debug.apk.
   If you had an older version installed, uninstall it first.

## Voices on the phone
Settings > Text-to-speech output > Speech Services by Google > Install voice data:
install English (India) and Hindi (India).

## Notes
- Works offline once voices are installed. PDFs never leave the phone.
- Scanned PDFs (images only) and PDFs with old Hindi fonts (e.g. Kruti Dev) have no readable text.
- Keep the screen on while reading; locking the phone may stop reading.
- Debug-signed APK: fine for personal use, not for the Play Store.
