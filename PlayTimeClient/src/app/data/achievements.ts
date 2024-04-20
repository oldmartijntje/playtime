export interface Achievement {
    lockedData: AchievementSettings;
    unlockedData: AchievementSettings;
    type: AchievementType;
    localstorageUrl: string;
    unlocksWhenLocolStorageUrlIsSetTo: any;
    hideOnMobile: boolean;
    found?: boolean;
}

export interface AchievementSettings {
    title: string;
    description: string;
    show: boolean;
    icon?: string; // URL to icon
}

export enum AchievementType {
    Achievement = 'Achievement',
    Secret = 'Secret',
    EasterEgg = 'EasterEgg'
}

export const achievements: Achievement[] = [
    {
        lockedData: {
            title: 'But hey...',
            description: 'Thanks for watching!',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0001-locked.png'
        },
        unlockedData: {
            title: 'That\'s just a theory!',
            description: 'You did the order of [this](https://www.youtube.com/watch?v=OcAUG4tsthE) Game theory intro.',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0001-unlocked.png'
        },
        type: AchievementType.EasterEgg,
        localstorageUrl: 'easterEggs.matpatCircle',
        unlocksWhenLocolStorageUrlIsSetTo: true,
        hideOnMobile: false
    },
    {
        lockedData: {
            title: 'Funy go brr',
            description: 'I think people in third grade find this funny.\n\nIt is done on a very fancy 404 page..',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0002-locked.png'
        },
        unlockedData: {
            title: 'Peepee poopoo',
            description: 'Made a funny word on the [404 page](https://oldmartijntje.nl/Fancy404).',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0002-unlocked.png'
        },
        type: AchievementType.EasterEgg,
        localstorageUrl: 'easterEggs.Fancy404.theFunnyOne',
        unlocksWhenLocolStorageUrlIsSetTo: true,
        hideOnMobile: true
    },
    {
        lockedData: {
            title: '!.,?;:',
            description: '[404](https://oldmartijntje.nl/Fancy404) characters not found.',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0004-locked.png'
        },
        unlockedData: {
            title: 'No need to be formal',
            description: 'You removed the interpunction from the [404 page](https://oldmartijntje.nl/Fancy404).',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0004-unlocked.png'
        },
        type: AchievementType.EasterEgg,
        localstorageUrl: 'easterEggs.Fancy404.noNeedToBeFormal',
        unlocksWhenLocolStorageUrlIsSetTo: true,
        hideOnMobile: true
    },
    {
        lockedData: {
            title: '404 UNO reverse card not found',
            description: 'But let\'s say that, hypothetically, it was found?\n\nVery fancy..',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0003-locked.png'
        },
        unlockedData: {
            title: 'The One Page is REALLL!!',
            description: 'You removed the "not" from the "404 not found" message.',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0003-unlocked.png'
        },
        type: AchievementType.EasterEgg,
        localstorageUrl: 'easterEggs.Fancy404.OhWaitItDoesExist',
        unlocksWhenLocolStorageUrlIsSetTo: true,
        hideOnMobile: true
    },
    {
        lockedData: {
            title: 'Thanos fanciest snap?',
            description: 'The 404 page is not found, as it should be.',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0005-locked.png'
        },
        unlockedData: {
            title: '404 Letters not found',
            description: 'You removed all the characters from the [404 page](https://oldmartijntje.nl/Fancy404).',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0005-unlocked.png'
        },
        type: AchievementType.EasterEgg,
        localstorageUrl: 'easterEggs.Fancy404.LettersNotFound',
        unlocksWhenLocolStorageUrlIsSetTo: true,
        hideOnMobile: true
    },
    {
        lockedData: {
            title: 'Ethernity not found.',
            description: 'Try clicking 404 page text.',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0006-locked.png'
        },
        unlockedData: {
            title: 'Ethernal Power!',
            description: 'You found the DOOM game.',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0006-unlocked.png'
        },
        type: AchievementType.EasterEgg,
        localstorageUrl: 'easterEggs.404.EthernityNF',
        unlocksWhenLocolStorageUrlIsSetTo: true,
        hideOnMobile: false
    },
    {
        lockedData: {
            title: '100 Clicks!',
            description: 'Get a 1up mushroom.',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0007-locked.png'
        },
        unlockedData: {
            title: 'What a deal!',
            description: 'You clicked a coin 100 times, and got a 1up mushroom!',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0007-unlocked.png'
        },
        type: AchievementType.Achievement,
        localstorageUrl: 'easterEggs.ClickerGame.1up',
        unlocksWhenLocolStorageUrlIsSetTo: true,
        hideOnMobile: false
    },
    {
        lockedData: {
            title: 'Fast Traval.',
            description: 'If only there was a way to not have to type out the full URL to my socials...',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0008-locked.png'
        },
        unlockedData: {
            title: 'Fast Travel.',
            description: 'You used the [navigator](https://oldmartijntje.nl/link) to fast travel.',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0008-unlocked.png'
        },
        type: AchievementType.Achievement,
        localstorageUrl: 'easterEggs.navigator.fastTravel',
        unlocksWhenLocolStorageUrlIsSetTo: true,
        hideOnMobile: false
    },
    {
        lockedData: {
            title: 'Fast Maniac.',
            description: 'Can\'t get enough of fast traveling, that\'s why you did it 10 times!',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0008-locked.png'
        },
        unlockedData: {
            title: 'Fast Maniac.',
            description: 'You used the [navigator](https://oldmartijntje.nl/link) to fast travel 10 times.',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0009-unlocked.png'
        },
        type: AchievementType.Achievement,
        localstorageUrl: 'easterEggs.navigator.fastTravelCounter',
        unlocksWhenLocolStorageUrlIsSetTo: 10,
        hideOnMobile: false
    },
    {
        lockedData: {
            title: 'The first one\'s always free',
            description: 'Use 0.0005 joules of energy to unlock this achievement.\n\nThis is equivalent to 10-7 kilocalories (big calories)—or less than a calorie, and even smaller than a small calorie. Even if I exert a bigger force over a greater distance, I\'m not going to burn one big calorie clicking a mouse.',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0010-locked.png'
        },
        unlockedData: {
            title: 'The first one\'s always free',
            description: 'You clicked this achievement.\n\nThis costed you 0.0005 joules of energy.\nThis is equivalent to 10-7 kilocalories (big calories)—or less than a calorie, and even smaller than a small calorie.',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0010-unlocked.png'
        },
        type: AchievementType.Achievement,
        localstorageUrl: 'easterEggs.firstOneFree',
        unlocksWhenLocolStorageUrlIsSetTo: true,
        hideOnMobile: false
    },
    {
        lockedData: {
            title: 'Shopaholic',
            description: 'Buy 50 things from the shop.\n\nIn [the clickerGame](http://oldmartijntje.nl/windows)',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0014-locked.png'
        },
        unlockedData: {
            title: 'Shopaholic',
            description: 'You bought 50 things from the shop in [the clickerGame](http://oldmartijntje.nl/windows).',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0014-unlocked.png'
        },
        type: AchievementType.Achievement,
        localstorageUrl: 'easterEggs.ClickerGame.shopaholic',
        unlocksWhenLocolStorageUrlIsSetTo: 50,
        hideOnMobile: false
    },
    {
        lockedData: {
            title: 'I shall return!',
            description: 'The Clicker game awaits you.\n\n[Click here](http://oldmartijntje.nl/windows) to ascend.',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0012-locked.png'
        },
        unlockedData: {
            title: 'I shall return!',
            description: 'You returned to [the clickerGame](http://oldmartijntje.nl/windows) with progression from a previous session.',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0012-unlocked.png'
        },
        type: AchievementType.Achievement,
        localstorageUrl: 'easterEggs.ClickerGame.welcomeBack',
        unlocksWhenLocolStorageUrlIsSetTo: true,
        hideOnMobile: false
    },
    {
        lockedData: {
            title: 'I can open this?',
            description: 'What happens when I click [this application](http://oldmartijntje.nl/windows)?',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0013-locked.png'
        },
        unlockedData: {
            title: 'I can open this?',
            description: 'Opened an application on the windows homepage.',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0013-unlocked.png'
        },
        type: AchievementType.Achievement,
        localstorageUrl: 'easterEggs.windows.runme',
        unlocksWhenLocolStorageUrlIsSetTo: true,
        hideOnMobile: true
    },
    {
        lockedData: {
            title: 'Life saver',
            description: 'Use taskmanager to close 50 applications at once.',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0011-locked.png'
        },
        unlockedData: {
            title: 'Life saver',
            description: 'Used taskmanager to close 50 applications at once.',
            show: true,
            icon: '../assets/icons/achievements/Sprite-0011-unlocked.png'
        },
        type: AchievementType.Achievement,
        localstorageUrl: 'easterEggs.windows.delete50Processes',
        unlocksWhenLocolStorageUrlIsSetTo: true,
        hideOnMobile: true
    },
];

const emptyAchievement: Achievement = {
    lockedData: {
        title: '',
        description: '',
        show: false,
        icon: ''
    },
    unlockedData: {
        title: '',
        description: '',
        show: false,
        icon: ''
    },
    type: AchievementType.Achievement,
    localstorageUrl: 'easterEggs.xxxxx',
    unlocksWhenLocolStorageUrlIsSetTo: true,
    hideOnMobile: false
};