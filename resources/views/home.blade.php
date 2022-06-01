@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ Auth::user()->id }} <br>
                    {{ Auth::user()->name }} <br> 
                    {{ Auth::user()->rol->first()->name; }} <br>
                    {{ Auth::user()->email }} <br>
                    {{ Auth::user()->password }} <br>
                    <ul>
                    @foreach (Auth::user()->shop as $shop)
                        <li>{{ $shop->name }}</li> 
                        <ul>
                        @foreach ( $shop->category as $category )
                           <li>{{ $category->name}}</li> 
                           <ul>
                            @foreach ($category->product as $product)
                                <li>{{ $product->name }}</li>
                            @endforeach
                           </ul>
                        @endforeach
                        </ul>
                    @endforeach
                    </ul>
                    

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
