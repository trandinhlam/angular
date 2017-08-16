export interface IPianoKey {
	whiteKeyId: number;
	blackKeyId?: number;
};
export const KeyPadToKeyId = [
	//TYPE 1

	// // Tone 2
	{KeyId:28 , KeyPad: '`'},
	{KeyId:30 , KeyPad: 'q'}, {KeyId:29 , KeyPad: '1'},
	{KeyId:32 , KeyPad: 'w'}, {KeyId:31 , KeyPad: '2'},
	{KeyId:33 , KeyPad: 'e'},
	{KeyId:35 , KeyPad: 'r'}, {KeyId:34 , KeyPad: '4'},
	{KeyId:37 , KeyPad: 't'}, {KeyId:36 , KeyPad: '5'},
	{KeyId:39 , KeyPad: 'y'}, {KeyId:38 , KeyPad: '6'},
	//Tone 3
	{KeyId:40 , KeyPad: 'u'},
	{KeyId:42 , KeyPad: 'i'}, {KeyId:41 , KeyPad: '8'},
	{KeyId:44 , KeyPad: 'o'}, {KeyId:43 , KeyPad: '9'},
	{KeyId:45 , KeyPad: 'p'},
	{KeyId:47 , KeyPad: '['}, {KeyId:46 , KeyPad: '-'},
	{KeyId:49 , KeyPad: ']'}, {KeyId:48 , KeyPad: '='},
	{KeyId:51 , KeyPad: '\\'}, {KeyId:50 , KeyPad: ''},
	// tone 4
	{KeyId:52 , KeyPad: 'z'},
	{KeyId:54 , KeyPad: 'x'}, {KeyId:53 , KeyPad: 's'},
	{KeyId:56 , KeyPad: 'c'}, {KeyId:55 , KeyPad: 'd'},
	{KeyId:57 , KeyPad: 'v'},
	{KeyId:59 , KeyPad: 'b'}, {KeyId:58 , KeyPad: 'g'},
	{KeyId:61 , KeyPad: 'n'}, {KeyId:60 , KeyPad: 'h'},
	{KeyId:63 , KeyPad: 'm'}, {KeyId:62 , KeyPad: 'j'},
	{KeyId:64 , KeyPad: ','}

];
export const KeyPadToKeyId2 = [
	

	//Tone 3
	{KeyId:40 , KeyPad: '`'},
	{KeyId:42 , KeyPad: 'q'}, {KeyId:41 , KeyPad: '1'},
	{KeyId:44 , KeyPad: 'w'}, {KeyId:43 , KeyPad: '2'},
	{KeyId:45 , KeyPad: 'e'},
	{KeyId:47 , KeyPad: 'r'}, {KeyId:46 , KeyPad: '4'},
	{KeyId:49 , KeyPad: 't'}, {KeyId:48 , KeyPad: '5'},
	{KeyId:51 , KeyPad: 'y'}, {KeyId:50 , KeyPad: '6'},
	// tone 4
	{KeyId:52 , KeyPad: 'u'},
	{KeyId:54 , KeyPad: 'i'}, {KeyId:53 , KeyPad: '8'},
	{KeyId:56 , KeyPad: 'o'}, {KeyId:55 , KeyPad: '9'},
	{KeyId:57 , KeyPad: 'p'},
	{KeyId:59 , KeyPad: '['}, {KeyId:58 , KeyPad: '-'},
	{KeyId:61 , KeyPad: ']'}, {KeyId:60 , KeyPad: '='},
	{KeyId:63 , KeyPad: '\\'}, {KeyId:62 , KeyPad: ''},
	{KeyId:64 , KeyPad: '\''}

];