import bcrypt from 'bcrypt';
import {pool} from './pool.js';

async function seed() {
    await pool.query('TRUNCATE users, genres, stories RESTART IDENTITY CASCADE;');

    const hashedPw = await bcrypt.hash(process.env.ADMIN_SEED_PW, 12);

    await pool.query(
        `INSERT INTO users (username, displayname, email, password, role)
        VALUES ($1, $2, $3, $4, $5)`,
        ["Admin", "Admin", "admin@example.com", hashedPw, "admin"]
    );

    await pool.query(
        `INSERT INTO genres (genreName)
        VALUES ($1), ($2), ($3)`,
        ["Fantasy", "Horror", "Romance"]
    );

    await pool.query(
        `INSERT INTO stories (genreID, authorID, storyName, titleImg, storyDesc, intro, storyObj)
        VALUES 
            ($1, $2, $3, $4, $5, $6, $7),
            ($8, $9, $10, $11, $12, $13, $14),
            ($15, $16, $17, $18, $19, $20, $21),
            ($22, $23, $24, $25, $26, $27, $28),
            ($29, $30, $31, $32, $33, $34, $35),
            ($36, $37, $38, $39, $40, $41, $42),
            ($43, $44, $45, $46, $47, $48, $49),
            ($50, $51, $52, $53, $54, $55, $56),
            ($57, $58, $59, $60, $61, $62, $63),
            ($64, $65, $66, $67, $68, $69, $70),
            ($71, $72, $73, $74, $75, $76, $77)`,
        [
            // 1. The Haunted House
            2, 1, "The Haunted House", 'defaultFallbacks/storyTitleImg.webp',
            "A crumbling Victorian mansion has sat empty for decades — until you inherit it from a relative you never knew existed.",
            "The key turns with a groan older than you are. Dust hangs in the air of the front hall, and somewhere upstairs, a floorboard creaks under weight that isn't yours.",
            "The story ends when the identity of the house's original owner — and what happened to them — is fully uncovered.",

            // 2. The Hero Lives
            1, 1, "The Hero Lives", 'defaultFallbacks/storyTitleImg.webp',
            "Every prophecy said the chosen hero would die saving the kingdom. You're the hero. You'd like to not do that part.",
            "The oracle's hand trembles as she lowers the scroll. 'The prophecy is clear,' she says, not quite meeting your eyes. 'But prophecies have been wrong before.'",
            "The story ends when the final battle against the kingdom's threat is resolved, one way or another.",

            // 3. Ordinary Person In A Supernatural World
            1, 1, "Ordinary Person In A Supernatural World", 'defaultFallbacks/storyTitleImg.webp',
            "You have no magic, no destiny, and no idea why a coven of witches just moved in next door.",
            "The moving truck across the street hasn't left in three days, and last night you could've sworn the porch light flickered in a pattern.",
            "The story ends when you either uncover the supernatural world's secret or successfully choose to walk away from it entirely.",

            // 4. Unlikely Love
            3, 1, "Unlikely Love", 'defaultFallbacks/storyTitleImg.webp',
            "Two people who have nothing in common are forced to work the same night shift, every night, for a month.",
            "The break room clock reads 11:58 PM. She's already there, arguing with the vending machine, when you walk in for the first time.",
            "The story ends when the two of you either confess how you feel, or one of you transfers shifts for good.",

            // 5. The Love Triangle
            3, 1, "The Love Triangle", 'defaultFallbacks/storyTitleImg.webp',
            "Your best friend just confessed feelings for the same person you've been quietly falling for all year.",
            "'I have to tell you something,' your best friend says, and the way they won't look up from their coffee tells you exactly what it is.",
            "The story ends when a choice is made — by you, by them, or by the person caught in the middle.",

            // 6. Human Centipede
            2, 1, "Human Centipede", 'defaultFallbacks/storyTitleImg.webp',
            "You wake up in an unfamiliar room with strangers around you and no memory of how any of you got there.",
            "The lights hum overhead. Someone across the room is already awake, testing the door, and it doesn't budge.",
            "The story ends when you either escape the building or discover exactly who brought you all here, and why.",

            // 7. Magical Human
            1, 1, "Magical Human", 'defaultFallbacks/storyTitleImg.webp',
            "You were born completely without magic in a world where everyone else has some — until the day that changes.",
            "The tingling starts in your fingertips first, faint and impossible, on a morning that started like every other one before it.",
            "The story ends when the source and true extent of your newfound power is finally revealed.",

            // 8. Ghosts Everywhere
            2, 1, "Ghosts Everywhere", 'defaultFallbacks/storyTitleImg.webp',
            "You just moved into a new apartment and quickly realize you're not the only one living there — and never will be.",
            "The lease said nothing about roommates. Yet there's a woman in the kitchen at 3 AM, and she's been dead for longer than you've been alive.",
            "The story ends when you either learn why the ghosts are bound to the apartment, or find a way to move out for good.",

            // 9. Scaredy Cat
            2, 1, "Scaredy Cat", 'defaultFallbacks/storyTitleImg.webp',
            "You're the most easily frightened person you know, and you just accidentally signed up to spend a night in the town's 'haunted' library.",
            "The librarian hands you the keys with a smile that doesn't quite reach her eyes. 'Lock up when you're done,' she says. 'If you're done.'",
            "The story ends when morning comes and you either walk out the front doors, or don't.",

            // 10. Hot Love
            3, 1, "Hot Love", 'defaultFallbacks/storyTitleImg.webp',
            "A cooking competition throws you into a kitchen with your culinary rival — the one person whose food (and company) you can't stop thinking about.",
            "The timer starts. Across the counter, they're already three steps ahead of you, and grinning like they know it.",
            "The story ends when the competition concludes and where the two of you stand with each other becomes clear.",

            // 11. Stalker
            2, 1, "Stalker", 'defaultFallbacks/storyTitleImg.webp',
            "Someone has been leaving small, unsettling signs that they know exactly where you are — all the time.",
            "The note on your windshield isn't signed. It just says: 'I saw you leave at 7:42 today. Be careful out there.'",
            "The story ends when you uncover who's been watching you, and either confront them or escape their reach entirely."
        ]
    );

    console.log("Seed complete!");
    await pool.end();
}

seed();