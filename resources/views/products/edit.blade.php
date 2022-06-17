@extends('layouts.app')

@section('content')
<div class="container">
    <form method="POST" action="{{ route('products.update', $product->id) }}" class="my-4">
        @csrf
        @method('PUT')
        <div id="create-product" title='Editar Prducto' name={{ $product->name }} description={{ $product->description }} price={{ $product->price }} picture={{ $product->picture }} ></div>
    </form>
</div>
@endsection