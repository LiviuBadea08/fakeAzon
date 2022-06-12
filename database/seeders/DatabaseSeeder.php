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

        $rol = Rol::factory()->create([
            'name' => 'seller'
        ]);

        Rol::factory()->create([
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
            'name' => 'La_tienda_de_Michi',
            'logo' => 'https://i.postimg.cc/jLwhqwSB/crocs.png',
            'banner' => 'https://images.unsplash.com/photo-1603145733190-59811e523c72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3JvY3N8ZW58MHx8MHx8&w=1000&q=80',
        ]);

        // $shop2 = Shop::factory()->create([
        //     'user_id' => $user->id,
        //     'name' => 'La tienda de Miguel',
        // ]);

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
            'name' => 'comida_de_michis',
            'picture' => 'https://gluc.mx/u/fotografias/m/2020/6/17/f800x450-28825_80271_5050.jpg',
        ]);
        Product::factory()->create([
            'shop_id' =>  $shop1->id,
            'category_id' => $category1->id,
            'name' => 'jugete_de_michis',
            'picture' => 'https://www.lanacion.com.py/resizer/Zq8pB8A8w4wq8xWZ4RhSuRBA00M=/fit-in/1000x800/smart/cloudfront-us-east-1.images.arcpublishing.com/lanacionpy/5DBRCYFHBZDULJYBFPKHGQX4TE.jpg',
        ]);
        Product::factory()->create([
            'shop_id' =>  $shop1->id,
            'category_id' => $category2->id,
            'name' => 'sabanas_para_jhon',
            'picture' => 'https://www.poresto.net/u/fotografias/m/2021/7/9/f768x1-98332_98459_0.jpg',
        ]);
        Product::factory()->create([
            'shop_id' =>  $shop1->id,
            'category_id' => $category1->id,
            'name' => 'pelotas_para_michis',
            'picture' => 'https://pbs.twimg.com/profile_images/1309180352997527553/QD6OjJQ0_400x400.jpg',
        ]);
        Product::factory()->create([
            'shop_id' =>  $shop1->id,
            'category_id' => $category1->id,
            'name' => 'bebedero_para_michis',
            'picture' => 'https://la-lista.com/wp-content/uploads/2022/05/Gato.jpg',
        ]);

    }
}
