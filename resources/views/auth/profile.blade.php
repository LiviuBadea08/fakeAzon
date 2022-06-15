@extends('layouts.app')

@section('content')
<div class="container">
    <div id="alert-additional-content-5" class="p-4 rounded-lg bg-setBrown-300" role="alert">
    <div class="flex items-center">
        <div class="mr-2 w-5 h-5 text-gray-700 dark:text-gray-300"><i class="fa-solid fa-shop"></i></div>
        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300">¿Te gustaría convertirte en vendedor?</h3>
    </div>
    <div class="mt-2 mb-4 text-sm text-gray-700 dark:text-gray-300">
       Te permitiremos crear una tienda en nuestra plataforma donde podrás publicar todos tus productos y ponerlos a la venta.
    </div>
    <div class="flex">
        <button type="button" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600">
        <div class="-ml-0.5 mr-2 h-4 w-4"><i class="fa-solid fa-handshake"></i></div>
        Comenzar a vender con nosotros 
        </button>
        <button type="button" class="text-gray-700 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 focus:ring-gray-600 dark:text-gray-300 dark:hover:text-white" data-bs-dismiss="alert" aria-label="Close">
        Descartar propuesta 
        </button>
    </div>
    </div>
</div>
<div class="container my-4">
    <div id="card-user" user={{ $user }} shops={{ $user->shop }} ></div>
</div>
@endsection