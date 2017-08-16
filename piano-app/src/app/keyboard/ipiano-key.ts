export interface IPianoKey {
	whiteKeyId: number;
	blackKeyId?: number;
};
export const KeyPadToKeyId = [
	// Tone 1
	{KeyId:16 , KeyPad: '`'},
	{KeyId:18 , KeyPad: 'q'}, {KeyId:17 , KeyPad: '1'},
	{KeyId:20 , KeyPad: 'w'}, {KeyId:19 , KeyPad: '2'},
	{KeyId:21 , KeyPad: 'e'},
	{KeyId:23 , KeyPad: 'r'}, {KeyId:22 , KeyPad: '4'},
	{KeyId:25 , KeyPad: 't'}, {KeyId:24 , KeyPad: '5'},
	{KeyId:27 , KeyPad: 'y'}, {KeyId:26 , KeyPad: '6'},
	// Tone 2
	{KeyId:28 , KeyPad: 'u'},
	{KeyId:30 , KeyPad: 'i'}, {KeyId:29 , KeyPad: '8'},
	{KeyId:32 , KeyPad: 'o'}, {KeyId:31 , KeyPad: '9'},
	{KeyId:33 , KeyPad: 'p'},
	{KeyId:35 , KeyPad: '['}, {KeyId:34 , KeyPad: '-'},
	{KeyId:37 , KeyPad: ']'}, {KeyId:36 , KeyPad: '='},
	{KeyId:39 , KeyPad: '\\'}, {KeyId:38 , KeyPad: ''},
	//Tone 3
	{KeyId:40 , KeyPad: 'z'},
	{KeyId:42 , KeyPad: 'x'}, {KeyId:41 , KeyPad: 's'},
	{KeyId:44 , KeyPad: 'c'}, {KeyId:43 , KeyPad: 'd'},
	{KeyId:45 , KeyPad: 'v'},
	{KeyId:47 , KeyPad: 'b'}, {KeyId:46 , KeyPad: 'g'},
	{KeyId:49 , KeyPad: 'n'}, {KeyId:48 , KeyPad: 'h'},
	{KeyId:51 , KeyPad: 'm'}, {KeyId:50 , KeyPad: 'j'},
	// tone 4
	{KeyId:52 , KeyPad: 'Z'},
	{KeyId:54 , KeyPad: 'X'}, {KeyId:53 , KeyPad: 'S'},
	{KeyId:56 , KeyPad: 'C'}, {KeyId:55 , KeyPad: 'D'},
	{KeyId:57 , KeyPad: 'V'},
	{KeyId:59 , KeyPad: 'B'}, {KeyId:58 , KeyPad: 'G'},
	{KeyId:61 , KeyPad: 'N'}, {KeyId:60 , KeyPad: 'H'},
	{KeyId:63 , KeyPad: 'M'}, {KeyId:62 , KeyPad: 'J'},
	{KeyId:64 , KeyPad: ''}
];