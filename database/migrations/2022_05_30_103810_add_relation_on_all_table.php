<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('rol_user', function (Blueprint $table){
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('rol_id')->references('id')->on('rols');
        });

        Schema::table('brandings', function (Blueprint $table){
            $table->unsignedBigInteger('user_id');

            $table->foreign('user_id')->references('id')->on('users');
        });

        Schema::table('products', function (Blueprint $table){
            $table->unsignedBigInteger('branding_id');
            $table->unsignedBigInteger('category_id');

            $table->foreign('branding_id')->references('id')->on('brandings');
            $table->foreign('category_id')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
