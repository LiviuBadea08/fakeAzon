<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Rol;
use App\Models\Shop;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        Rol::factory()->create([
            'name' => 'seller'
        ]);

        $rol = Rol::factory()->create([
            'name' => 'customer'
        ]);

        $user = User::factory()->create([
            'name' => 'Miguel',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('12345'),
        ]);

        $user->Rol()->attach($rol);

        $shop1 = Shop::factory()->create([
            'user_id' => $user->id,
            'name' => 'La tienda de Michi',
        ]);

        $shop2 = Shop::factory()->create([
            'user_id' => $user->id,
            'name' => 'La tienda de Miguel',
        ]);

        Product::factory()->create([
            'shop_id' =>  $shop1->id,
            'name' => 'cosas de michis',
        ]);
        Product::factory()->create([
            'shop_id' =>  $shop1->id,
            'name' => 'cosos de michis',
        ]);
        Product::factory()->create([
            'shop_id' =>  $shop1->id,
            'name' => 'sabanas para jhon',
        ]);

    }
}
