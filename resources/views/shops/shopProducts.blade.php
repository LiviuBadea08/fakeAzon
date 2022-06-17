@extends('layouts.app')

@section('content')
    <div class="my-5 container">
        <div class="flex justify-end">
            <a href="{{ route('product.create', ['shopId' => $shop->id]) }}" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Agregar Producto</a>
        </div>
        <div id="table" shop={{ $shop }} products={{ $products }}></div>
    </div>
@endsection