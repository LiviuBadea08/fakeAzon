<?php

namespace Database\Seeders;

use App\Models\Category;
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

        $category1 = Category::factory()->create([
            'shop_id' => $shop1->id,
            'name' => 'michis'
        ]);
        
        $category2 = Category::factory()->create([
            'shop_id' => $shop1->id,
            'name' => 'jhon'
        ]);

        Product::factory()->create([
            'shop_id' =>  $shop1->id,
            'category_id' => $category1->id,
            'name' => 'comida de michis',
        ]);
        Product::factory()->create([
            'shop_id' =>  $shop1->id,
            'category_id' => $category1->id,
            'name' => 'jugete de michis',
        ]);
        Product::factory()->create([
            'shop_id' =>  $shop1->id,
            'category_id' => $category2->id,
            'name' => 'sabanas para jhon',
        ]);

    }
}
