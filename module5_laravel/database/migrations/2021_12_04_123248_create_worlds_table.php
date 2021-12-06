<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('worlds', function (Blueprint $table) {
            $table->id();
            $table->string('world_name');
            $table->string('world_type');
            $table->string('world_description');
            $table->integer('rectangle_x')->nullable();
            $table->integer('rectangle_y')->nullable();
            $table->decimal('branch_factor')->nullable();
            $table->integer('branch_init_range')->nullable();
            $table->integer('circle_rooms')->nullable();

            $table->timestamps('latest_world'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('worlds');
    }
}
