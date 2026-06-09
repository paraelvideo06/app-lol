import { Routes } from '@angular/router';
import { Contact } from '../components/contact/contact';
import { Home } from '../components/home/home';
import { CharacterDetail } from '../components/character-detail/character-detail';
import { CharacterMultirol } from '../components/character-multirol/character-multirol';
import { CharacterRoleTank } from '../components/character-role-tank/character-role-tank';

export const routes: Routes = [
    {path: "contact", component: Contact},
    {path: "", component: Home},
    {path: "character/:id", component: CharacterDetail},
    {path: "filter/multirol", component: CharacterMultirol},
    {path: "filter/role/tank", component: CharacterRoleTank}
];
